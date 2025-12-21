import { useState } from "react";
import { User, Users, Phone, Calendar } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const StudentRegistration = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    studentName: "",
    studentAge: "",
    parentName: "",
    mobileNumber: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate fields
    if (!formData.studentName || !formData.studentAge || !formData.parentName || !formData.mobileNumber) {
      toast({
        title: "Please fill all fields",
        description: "All fields are required to complete registration.",
        variant: "destructive",
      });
      return;
    }

    // Create WhatsApp message
    const message = `Assalamu Alaikum,

Student Name: ${formData.studentName}
Student Age: ${formData.studentAge}
Parent Name: ${formData.parentName}
Mobile Number: ${formData.mobileNumber}

I would like to register for Ayrah Islamic Academy.`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/918925611202?text=${encodedMessage}`, "_blank");
  };

  return (
    <Layout>
      <section className="min-h-screen pt-24 pb-16 bg-background islamic-pattern">
        <div className="container mx-auto px-4">
          <div className="max-w-xl mx-auto">
            {/* Header */}
            <div className="text-center mb-10">
              <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                Student <span className="text-primary">Registration</span>
              </h1>
              <p className="text-muted-foreground">
                Fill in the details below to register your child for Ayrah Islamic Academy
              </p>
              <div className="flex items-center justify-center gap-4 mt-6">
                <div className="h-px w-12 bg-primary/50" />
                <div className="w-2 h-2 rotate-45 bg-primary" />
                <div className="h-px w-12 bg-primary/50" />
              </div>
            </div>

            {/* Registration Form */}
            <div className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-lg">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Student Name */}
                <div className="space-y-2">
                  <Label htmlFor="studentName" className="text-foreground flex items-center gap-2">
                    <User size={16} className="text-primary" />
                    Student Name
                  </Label>
                  <Input
                    id="studentName"
                    name="studentName"
                    type="text"
                    placeholder="Enter student's full name"
                    value={formData.studentName}
                    onChange={handleInputChange}
                    className="bg-background border-border"
                  />
                </div>

                {/* Student Age */}
                <div className="space-y-2">
                  <Label htmlFor="studentAge" className="text-foreground flex items-center gap-2">
                    <Calendar size={16} className="text-primary" />
                    Student Age (Applicable for all ages)
                  </Label>
                  <Input
                    id="studentAge"
                    name="studentAge"
                    type="number"
                    placeholder="Enter student's age"
                    value={formData.studentAge}
                    onChange={handleInputChange}
                    className="bg-background border-border"
                  />
                </div>

                {/* Parent Name */}
                <div className="space-y-2">
                  <Label htmlFor="parentName" className="text-foreground flex items-center gap-2">
                    <Users size={16} className="text-primary" />
                    Parent Name
                  </Label>
                  <Input
                    id="parentName"
                    name="parentName"
                    type="text"
                    placeholder="Enter parent's full name"
                    value={formData.parentName}
                    onChange={handleInputChange}
                    className="bg-background border-border"
                  />
                </div>

                {/* Mobile Number */}
                <div className="space-y-2">
                  <Label htmlFor="mobileNumber" className="text-foreground flex items-center gap-2">
                    <Phone size={16} className="text-primary" />
                    Mobile Number
                  </Label>
                  <Input
                    id="mobileNumber"
                    name="mobileNumber"
                    type="tel"
                    placeholder="Enter mobile number"
                    value={formData.mobileNumber}
                    onChange={handleInputChange}
                    className="bg-background border-border"
                  />
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 text-lg py-6 shadow-gold"
                >
                  Submit & Register via WhatsApp
                </Button>
              </form>

              <p className="mt-6 text-center text-muted-foreground text-sm">
                Your details will be sent via WhatsApp to complete registration
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default StudentRegistration;
