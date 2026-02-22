// src/router.jsx
import { createBrowserRouter } from "react-router-dom";
import AppLayout from "../layouts/AppLayout";
import Home from "../pages/Home";
import ProtectedRoutes from "../components/ProtectedRoutes";
import NotFound from "../pages/NotFound";
import ExperienceSection from "@/components/Experience/ExperienceSection";
import Contact from "@/components/Contact/Contact";
import AboutSection from "@/components/About/AboutSection";
import EducationSection from "@/components/Education/EducationSection";
import ProjectsSection from "@/components/Projects/ProjectsSection";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <AppLayout />,
      children: [
        { index: true, element: <Home /> },
        {
          path: "about",
          element: (
            <ProtectedRoutes>
              <AboutSection />
            </ProtectedRoutes>
          ),
        },
        {
          path: "education",
          element: (
            <ProtectedRoutes>
              <EducationSection />
            </ProtectedRoutes>
          ),
        },
        {
          path: "experience",
          element: (
            <ProtectedRoutes>
              <ExperienceSection />
            </ProtectedRoutes>
          ),
        },
        {
          path: "projects",
          element: (
            <ProtectedRoutes>
              <ProjectsSection />
            </ProtectedRoutes>
          ),
        },
        {
          path: "contact",
          element: (
            <ProtectedRoutes>
              <Contact />
            </ProtectedRoutes>
          ),
        },
      ],
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ],
  {
    basename: "/Er.ShankaraNarayana",
  },
);

export default router;
