import { useState } from "react";
import { fallbackProjects } from "../data/portfolioData";

export function useProjects() {
  const [projects] = useState(fallbackProjects);

  return { 
    projects, 
    loading: false, 
    error: "" 
  };
}