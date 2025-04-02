import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

const FacultyModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const facultyDetails = {
    name: "Dr. Arun Kumar Yadav",
    designation: "Assistant Professor Grade 1",
    department: "School of Advanced Science (SAS)",
    specialization: "Orbital Mechanics",
    email: "arun.yadav@vitap.ac.in",
    photo: "https://vitap-backend.s3.ap-south-1.amazonaws.com/Dr_Arun_Kumar_Yadav_SAS_0882_cc6feb0927.avif",
    education: [
      {
        level: "Doctoral Degree",
        degree: "Ph.D.",
        institution: "Indian Institute of Technology(ISM) Dhanbad"
      },
      {
        level: "Master Degree",
        degree: "M.Sc.",
        institution: "Banaras Hindu University Varanasi"
      },
      {
        level: "Under Graduation",
        degree: "B.Sc.",
        institution: "Dr. R M L Avadh University Faizabad"
      }
    ]
  };

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-background rounded-lg shadow-xl w-full max-w-2xl relative max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-background border-b p-4 flex items-center justify-between z-10">
          <h2 className="text-2xl font-semibold">Faculty Coordinator</h2>
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={onClose} 
            className="hover:bg-accent rounded-full"
          >
            <X className="h-5 w-5" />
          </Button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Basic Information */}
          <div className="border p-4 rounded-lg bg-card">
            <h3 className="text-xl font-medium mb-4">Basic Information</h3>
            <div className="flex flex-col md:flex-row gap-6">
              {/* Faculty Photo */}
              <div className="flex-shrink-0">
                <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-primary/20">
                  <img
                    src={facultyDetails.photo}
                    alt={facultyDetails.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              {/* Faculty Details */}
              <div className="flex-grow space-y-2 text-base">
                <p><span className="font-medium">Name:</span> {facultyDetails.name}</p>
                <p><span className="font-medium">Designation:</span> {facultyDetails.designation}</p>
                <p><span className="font-medium">Department:</span> {facultyDetails.department}</p>
                <p><span className="font-medium">Specialization:</span> {facultyDetails.specialization}</p>
                <p><span className="font-medium">Email:</span> {facultyDetails.email}</p>
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="border p-4 rounded-lg bg-card">
            <h3 className="text-xl font-medium mb-4">Education</h3>
            <div className="space-y-4">
              {facultyDetails.education.map((edu, index) => (
                <div key={index} className="border-l-2 border-primary pl-4">
                  <p className="font-medium text-lg">{edu.level}</p>
                  <p className="text-base">{edu.degree}</p>
                  <p className="text-base text-muted-foreground">{edu.institution}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="sticky bottom-0 bg-background border-t p-4 flex justify-end">
          <Button variant="outline" onClick={onClose}>Close</Button>
        </div>
      </div>
    </div>
  );
};

export default FacultyModal; 