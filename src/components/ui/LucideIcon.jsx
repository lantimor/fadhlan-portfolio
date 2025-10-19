import * as LucideIcons from "lucide-react";

const LucideIcon = ({ name, size = 28, className }) => { // Default size diatur 28
  const IconComponent = LucideIcons[name];
  if (!IconComponent) return null; 
  return <IconComponent size={size} className={className} />;
};

export default LucideIcon;