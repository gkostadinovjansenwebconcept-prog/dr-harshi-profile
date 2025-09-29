import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import drHarshiImage from "@/assets/dr-harshi-dhingra.webp";
import { Mail, ExternalLink, GraduationCap, Award, FileText, Users } from "lucide-react";
import { useEffect } from "react";

const DrHarshiDhingra = () => {
  useEffect(() => {
    // Add schema markup to head
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify({
      "@context": "https://schema.org/",
      "@type": "Person",
      "name": "Dr. Harshi Dhingra",
      "familyName": "Dhingra",
      "givenName": "Harshi",
      "gender": "Female",
      "email": "drharshidhingra@gmail.com",
      "callSign": "Pathologist & Medical Expert: Dr. Harshi Dhingra. Specializing in Diagnostic Pathology, Medical Research, and Medical Content Review.",
      "description": "Dr. Harshi Dhingra is a distinguished Professor of Pathology, MBBS, MD, with over a decade of experience in diagnostic medicine, clinical pathology, and medical research. She specializes in cytology, histopathology, and haematopathology.",
      "jobTitle": "Professor of Pathology",
      "worksFor": {
        "@type": "Organization",
        "name": "Noida International Institute of Medical Sciences (NIIMS)"
      },
      "alumniOf": [
        {
          "@type": "Organization",
          "name": "Rajiv Gandhi University of Health Sciences",
          "description": "Doctor of Medicine – M.D. Pathology, 2009-2012"
        },
        {
          "@type": "Organization", 
          "name": "Bharati Vidyapeeth",
          "description": "Bachelor of Medicine, Bachelor of Surgery – MBBS, 2001-2006"
        }
      ],
      "hasCredential": [
        {
          "@type": "EducationalOccupationalCredential",
          "credentialCategory": "Medical License",
          "recognizedBy": "Punjab Medical Council"
        },
        {
          "@type": "EducationalOccupationalCredential",
          "credentialCategory": "Medical License", 
          "recognizedBy": "Delhi Medical Council"
        }
      ]
    });
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* SEO Meta Tags */}
      <head>
        <title>Dr. Harshi Dhingra, MD - Professor of Pathology | Medical Expert & Research Specialist</title>
        <meta name="description" content="Dr. Harshi Dhingra, MD, is a distinguished Professor of Pathology with over a decade of experience in diagnostic medicine, clinical pathology, and medical research. MBBS, MD Pathology specialist." />
        <meta name="keywords" content="Dr. Harshi Dhingra, Pathologist, Medical Expert, MBBS, MD Pathology, Diagnostic Medicine, Medical Research, Clinical Pathology" />
        <link rel="canonical" href="/dr-harshi-dhingra" />
      </head>

      <main className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Hero Section */}
        <header className="text-center mb-8">
          <div className="mb-6">
            <img 
              src={drHarshiImage} 
              alt="Dr. Harshi Dhingra, MD - Professor of Pathology"
              className="w-48 h-48 rounded-full mx-auto object-cover shadow-lg"
            />
          </div>
          
          <h1 className="text-4xl font-bold text-foreground mb-2">Dr. Harshi Dhingra</h1>
          <p className="text-xl text-muted-foreground mb-6">Professor of Pathology, MBBS, MD</p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button variant="available" size="lg" className="px-8">
              Available for Medical Consultation
            </Button>
            <Button variant="contact" size="lg" className="px-8">
              <Mail className="w-4 h-4 mr-2" />
              Contact Dr. Dhingra
            </Button>
          </div>
        </header>

        {/* Professional Summary */}
        <section className="mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h2 className="text-2xl font-semibold mb-4 flex items-center">
                    <Award className="w-5 h-5 mr-2 text-[hsl(var(--medical-blue))]" />
                    Medical Expertise
                  </h2>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Diagnostic Pathology Specialist</li>
                    <li>• Cytology & Histopathology</li>
                    <li>• Haematopathology</li>
                    <li>• Medical Content Writing & Review</li>
                    <li>• Laboratory Management Systems</li>
                  </ul>
                </div>
                <div>
                  <h2 className="text-2xl font-semibold mb-4 flex items-center">
                    <FileText className="w-5 h-5 mr-2 text-[hsl(var(--medical-blue))]" />
                    Publications & Research
                  </h2>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• 25+ Peer-reviewed Publications</li>
                    <li>• 175+ Citations on Google Scholar</li>
                    <li>• Research in Rare Disease Pathology</li>
                    <li>• Medical Writer for Health Platforms</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Professional Biography */}
        <section className="mb-8">
          <h2 className="text-3xl font-semibold mb-6">Professional Biography</h2>
          
          <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground">
            <p>
              Dr. Harshi Dhingra, MD, is a licensed medical doctor with a specialization in Pathology. 
              She is currently employed as faculty in a medical school with a tertiary care hospital and research center.
            </p>
            
            <p>
              She has over a decade of experience in diagnostic, clinical, research, and teaching work, 
              and has several publications in indexed peer-reviewed journals to her name. She has a keen 
              interest in medical content writing and reviewing.
            </p>
            
            <p>
              Dr. Dhingra's expertise extends to laboratory management systems, biomedical research methodology, 
              and quality management in medical laboratories. She combines clinical excellence with educational 
              leadership, mentoring medical students and residents while maintaining active research contributions 
              to diagnostic pathology and clinical medicine.
            </p>
            
            <p>
              Beyond academic research, Dr. Dhingra serves as a medical writer and reviewer for multiple health 
              platforms including Diamond Rehab Thailand, Rare Disease Advisor, BuzzRx and A Lean Life. She has 
              also contributed to many other online health platforms such as Know Your DNA, Rapid STD Testing, 
              Lab Testing API, The Discover Magazine, and Holistic Nootropics.
            </p>
          </div>
        </section>

        {/* Education & Qualifications */}
        <section className="mb-8">
          <h2 className="text-3xl font-semibold mb-6 flex items-center">
            <GraduationCap className="w-6 h-6 mr-2 text-[hsl(var(--medical-blue))]" />
            Education & Qualifications
          </h2>
          
          <div className="space-y-4">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-[hsl(var(--medical-blue))]">Doctor of Medicine – M.D. Pathology</h3>
                <p className="text-muted-foreground">Rajiv Gandhi University of Health Sciences</p>
                <p className="text-sm text-muted-foreground">2009 – 2012</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-[hsl(var(--medical-blue))]">Bachelor of Medicine, Bachelor of Surgery – MBBS</h3>
                <p className="text-muted-foreground">Bharati Vidyapeeth</p>
                <p className="text-sm text-muted-foreground">2001 – 2006</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-[hsl(var(--medical-blue))]">Medical Registrations</h3>
                <ul className="text-muted-foreground space-y-1">
                  <li>• MBBS MD registration, Punjab Medical Council</li>
                  <li>• MBBS MD registration, Delhi Medical Council</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Current Position & Affiliations */}
        <section className="mb-8">
          <h2 className="text-3xl font-semibold mb-6 flex items-center">
            <Users className="w-6 h-6 mr-2 text-[hsl(var(--medical-blue))]" />
            Current Position & Affiliations
          </h2>
          
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-[hsl(var(--medical-blue))] mb-2">
                Professor of Pathology
              </h3>
              <p className="text-muted-foreground mb-4">
                Noida International Institute of Medical Sciences (NIIMS), Greater Noida, Uttar Pradesh, India
              </p>
              <p className="text-muted-foreground">
                Faculty member at a medical school with tertiary care hospital and research center, 
                specializing in diagnostic pathology education and clinical research.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Contact Information */}
        <section className="mb-8">
          <h2 className="text-3xl font-semibold mb-6">Connect with Dr. Harshi Dhingra</h2>
          
          <Card>
            <CardContent className="p-6">
              <p className="text-muted-foreground mb-4">
                For medical consultations, research collaborations, or medical writing projects, 
                please reach out through the following channels:
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Button variant="outline" className="flex items-center">
                  <Mail className="w-4 h-4 mr-2" />
                  Email
                </Button>
                <Button variant="outline" className="flex items-center">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  LinkedIn
                </Button>
                <Button variant="outline" className="flex items-center">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Google Scholar
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  );
};

export default DrHarshiDhingra;