import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

const TeamModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const teamSections = [
    {
      title: "Machine Learning & Software Integration in Drone",
      members: [
        { name: "Aditya Pandey", id: "22BCE8776" },
        { name: "Mukkala Rohit", id: "22BCE8655" },
      ],
      description: [
        "Developed and trained the ML model for the drone.",
        "Integrated the ML model into the drone's software for real-time processing.",
      ],
    },
    {
      title: "Website & Dashboard Development",
      members: [
        { name: "Divyansh Singh", id: "22BCE7596" },
        { name: "Syed Mazz Huasin Quadri", id: "22BCE9206" },
      ],
      description: [
        "Built a website that showcases the project's statistics.",
        "Developed a dashboard to visualize all collected data.",
      ],
    },
    {
      title: "Hardware & Assembly",
      members: [
        { name: "Swastik Shukal" },
        { name: "Harsh Kumar Singh" },
      ],
      description: [
        "Worked on assembling the drone's hardware components.",
        "Ensured proper functionality of all integrated hardware parts.",
      ],
    },
  ];

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-background rounded-lg shadow-xl w-full max-w-2xl relative max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-background border-b p-4 flex items-center justify-between z-10">
          <h2 className="text-2xl font-semibold">My Team</h2>
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
          {teamSections.map((section) => (
            <div key={section.title} className="border p-4 rounded-lg bg-card">
              <h3 className="text-xl font-medium">{section.title}</h3>
              <ul className="mt-2 text-base text-muted-foreground">
                {section.members.map((member) => (
                  <li key={member.name} className="font-medium">
                    {member.name} {member.id && `(${member.id})`}
                  </li>
                ))}
              </ul>
              <ul className="mt-2 list-disc list-inside text-base">
                {section.description.map((desc, index) => (
                  <li key={index}>{desc}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="sticky bottom-0 bg-background border-t p-4 flex justify-end">
          <Button variant="outline" onClick={onClose}>Close</Button>
        </div>
      </div>
    </div>
  );
};

export default TeamModal;