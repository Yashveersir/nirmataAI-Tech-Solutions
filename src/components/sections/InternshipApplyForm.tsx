"use client";

import { useState, type FormEvent } from "react";
import { Send, CheckCircle, Loader2, CreditCard } from "lucide-react";
import Script from "next/script";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";

const internshipRoles = [
  { value: "Cyber Security", label: "Cyber Security" },
  { value: "Data Analytics", label: "Data Analytics" },
  { value: "Data Science", label: "Data Science" },
  { value: "Frontend Development", label: "Frontend Development" },
  { value: "Backend Development", label: "Backend Development" },
  { value: "Full Stack Development", label: "Full Stack Development" },
  { value: "AI / ML", label: "AI / ML" },
  { value: "Other", label: "Other" },
];

interface InternshipFormData {
  name: string;
  email: string;
  mobile: string;
  university: string;
  role: string;
  message: string;
}

const initialForm: InternshipFormData = {
  name: "",
  email: "",
  mobile: "",
  university: "",
  role: "",
  message: "",
};

export function InternshipApplyForm() {
  const [form, setForm] = useState<InternshipFormData>(initialForm);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof InternshipFormData, string>>>({});
  
  // Dialog State
  const [dialogOpen, setDialogOpen] = useState(false);
  const [dialogStatus, setDialogStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState("");

  const validate = (): boolean => {
    const next: Partial<Record<keyof InternshipFormData, string>> = {};
    if (!form.name.trim()) next.name = "Name is required.";
    if (!form.email.trim()) next.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      next.email = "Please enter a valid email.";
    if (!form.role) next.role = "Please select a role.";
    if (!form.message.trim()) next.message = "Resume drive link is required.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    
    setLoading(true);
    setDialogStatus('sending');
    setDialogOpen(true);
    
    try {
      // 1. Generate Razorpay Order
      const orderResponse = await fetch('/api/razorpay', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount: 49 }),
      });
      
      const orderData = await orderResponse.json();
      if (!orderResponse.ok) {
        throw new Error(orderData.error || 'Failed to initialize payment');
      }

      const { order, key_id } = orderData;

      // 2. Open Razorpay Checkout
      const options = {
        key: key_id,
        amount: order.amount,
        currency: order.currency,
        name: "NirmataAI Tech Solutions",
        description: "Internship Application Fee",
        order_id: order.id,
        handler: async function (response: any) {
          setDialogStatus('sending');
          try {
            const payload = {
              name: form.name,
              email: form.email,
              mobile: form.mobile,
              university: form.university,
              role: form.role,
              message: form.message,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_order_id: response.razorpay_order_id,
              razorpay_signature: response.razorpay_signature,
            };

            const submitResponse = await fetch('/api/internship', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(payload),
            });
            
            const submitData = await submitResponse.json();
            
            if (!submitResponse.ok) {
              throw new Error(submitData.error || 'Failed to submit application');
            }
            
            setDialogStatus('success');
            toast.success("Payment successful and Application submitted!");
          } catch (error: any) {
            console.error(error);
            setErrorMessage(error.message || "Failed to finalize application. Please contact support.");
            setDialogStatus('error');
            toast.error(error.message || "Failed to finalize application.");
          } finally {
            setLoading(false);
          }
        },
        prefill: {
          name: form.name,
          email: form.email,
          contact: form.mobile || "",
        },
        theme: {
          color: "#2563eb",
        },
        modal: {
          ondismiss: function () {
            setLoading(false);
            setDialogOpen(false);
            toast.error("Payment cancelled");
          }
        }
      };

      const rzp = new (window as any).Razorpay(options);
      rzp.on('payment.failed', function (response: any) {
        setErrorMessage("Payment Failed. Reason: " + response.error.description);
        setDialogStatus('error');
        setLoading(false);
      });
      rzp.open();

    } catch (error: any) {
      console.error(error);
      setErrorMessage(error.message || "Failed to initiate payment. Please try again.");
      setDialogStatus('error');
      toast.error(error.message || "Failed to initiate payment. Please try again.");
      setLoading(false);
    }
  };

  const handleCloseDialog = (open: boolean) => {
    if (!open && dialogStatus === 'success') {
      setForm(initialForm);
    }
    setDialogOpen(open);
    if (!open) {
      setTimeout(() => setDialogStatus('idle'), 300);
    }
  };

  const update = (field: keyof InternshipFormData, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  return (
    <>
      <Script src="https://checkout.razorpay.com/v1/checkout.js" strategy="lazyOnload" />
      <form
        onSubmit={handleSubmit}
        aria-label="Internship Application Form"
        className="p-8 sm:p-12 text-left bg-transparent"
      >
        <div className="space-y-6">
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="intern-name">
                Full Name <span className="text-destructive">*</span>
              </Label>
              <Input
                id="intern-name"
                placeholder="John Doe"
                value={form.name}
                onChange={(e) => update("name", e.target.value)}
                aria-invalid={!!errors.name}
              />
              {errors.name && <p className="text-destructive text-xs">{errors.name}</p>}
            </div>
            <div className="space-y-2">
              <Label htmlFor="intern-email">
                Email Address <span className="text-destructive">*</span>
              </Label>
              <Input
                id="intern-email"
                type="email"
                placeholder="you@example.com"
                value={form.email}
                onChange={(e) => update("email", e.target.value)}
                aria-invalid={!!errors.email}
              />
              {errors.email && <p className="text-destructive text-xs">{errors.email}</p>}
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="intern-mobile">Mobile Number</Label>
              <Input
                id="intern-mobile"
                type="tel"
                placeholder="Your mobile number"
                value={form.mobile}
                onChange={(e) => update("mobile", e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="intern-university">University / College</Label>
              <Input
                id="intern-university"
                placeholder="Where are you studying?"
                value={form.university}
                onChange={(e) => update("university", e.target.value)}
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="intern-role">
              Role Applying For <span className="text-destructive">*</span>
            </Label>
            <Select
              value={form.role}
              onValueChange={(val) => update("role", val)}
            >
              <SelectTrigger id="intern-role" aria-invalid={!!errors.role}>
                <SelectValue placeholder="Select a role" />
              </SelectTrigger>
              <SelectContent>
                {internshipRoles.map((role) => (
                  <SelectItem key={role.value} value={role.value}>
                    {role.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {errors.role && <p className="text-destructive text-xs">{errors.role}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="intern-message">
              Resume Drive Link <span className="text-destructive">*</span>
            </Label>
            <p className="text-xs text-muted-foreground font-medium">Note: Please ensure the Google Drive link access is set to "Anyone with the link can view".</p>
            <Input
              id="intern-message"
              placeholder="https://drive.google.com/..."
              value={form.message}
              onChange={(e) => update("message", e.target.value)}
              aria-invalid={!!errors.message}
            />
            {errors.message && <p className="text-destructive text-xs">{errors.message}</p>}
          </div>

          <Button type="submit" size="lg" className="w-full" disabled={loading}>
            {loading ? (
              <Loader2 className="mr-2 size-4 animate-spin" aria-hidden="true" />
            ) : (
              <CreditCard className="mr-2 size-4" aria-hidden="true" />
            )}
            {loading ? "Processing..." : "Pay ₹49 & Apply"}
          </Button>
        </div>
      </form>

      <Dialog open={dialogOpen} onOpenChange={handleCloseDialog}>
        <DialogContent className="sm:max-w-md text-center flex flex-col items-center p-8" showCloseButton={dialogStatus !== 'sending'}>
          {dialogStatus === 'sending' && (
            <>
              <div className="flex size-16 items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                <Loader2 className="size-8 animate-spin" />
              </div>
              <DialogHeader className="items-center">
                <DialogTitle className="text-2xl">Submitting Application...</DialogTitle>
                <DialogDescription className="text-base mt-2">
                  Please wait while we process your request.
                </DialogDescription>
              </DialogHeader>
            </>
          )}

          {dialogStatus === 'success' && (
            <>
              <div className="flex size-16 items-center justify-center rounded-full bg-green-500/10 text-green-500 mb-4">
                <CheckCircle className="size-8" />
              </div>
              <DialogHeader className="items-center">
                <DialogTitle className="text-2xl">Application Received!</DialogTitle>
                <DialogDescription className="text-base mt-2">
                  Thank you for applying. We will review your application and get back to you soon.
                </DialogDescription>
              </DialogHeader>
              <DialogFooter className="w-full sm:justify-center mt-6">
                <Button onClick={() => handleCloseDialog(false)} className="w-full sm:w-auto min-w-[120px]">
                  Close
                </Button>
              </DialogFooter>
            </>
          )}

          {dialogStatus === 'error' && (
            <>
              <div className="flex size-16 items-center justify-center rounded-full bg-destructive/10 text-destructive mb-4">
                <div className="size-8 flex items-center justify-center font-bold text-2xl">!</div>
              </div>
              <DialogHeader className="items-center">
                <DialogTitle className="text-2xl">Submission Failed</DialogTitle>
                <DialogDescription className="text-base mt-2">
                  {errorMessage}
                </DialogDescription>
              </DialogHeader>
              <DialogFooter className="w-full sm:justify-center mt-6">
                <Button variant="outline" onClick={() => handleCloseDialog(false)} className="w-full sm:w-auto min-w-[120px]">
                  Try Again
                </Button>
              </DialogFooter>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
