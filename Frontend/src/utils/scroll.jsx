export const scrollToSection = (sectionId, setActiveTab) => {
  
  if (setActiveTab) {
    setActiveTab(sectionId);
  }

  
  const element = document.getElementById(sectionId);
  
  if (element) {
   
    const yOffset = -80; 
    const yPosition = element.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({
      top: yPosition,
      behavior: "smooth",
    });
  }
};