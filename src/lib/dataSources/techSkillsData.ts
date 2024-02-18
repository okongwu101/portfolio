// define the type definition object for the data structure above

export type TechSkillDataTypes = {
  skillClass: string;
  values: {
    name: string;
    link: string;
  }[];
};

export const skillsData = [
  {
    skillClass: "Languages",
    values: [
      {
        name: "Javascript",
        link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      },
      {
        name: "Typescript",
        link: "https://www.typescriptlang.org/",
      },
    ],
  },
  {
    skillClass: "Frameworks",
    values: [
      {
        name: "React",
        link: "https://react.dev/",
      },
      { name: "NextJS", link: "https://nextjs.org/" },
    ],
  },
  {
    skillClass: "CSS",
    values: [
      { name: "TailwindCSS", link: "https://tailwindcss.com/" },
      { name: "Bulma", link: "https://bulma.io/" },
      { name: "W3CSS", link: "https://www.w3schools.com/" },
    ],
  },
  {
    skillClass: "UI Frameworks",
    values: [
      {
        name: "Mantine UI",
        link: "https://mantine.dev/",
      },
      { name: "Material UI", link: "https://mui.com/" },
    ],
  },
  {
    skillClass: "State management",
    values: [
      { name: "Jotai", link: "https://jotai.org/" },
      { name: "Recoil", link: "https://recoiljs.org/" },
    ],
  },
  {
    skillClass: "Authentication",
    values: [
      { name: "Next-Auth", link: "https://next-auth.js.org/" },
      { name: "Supabase Auth", link: "https://supabase.com/auth" },
      {
        name: "Firebase-Auth",
        link: "https://firebase.google.com/products/auth",
      },
    ],
  },
  {
    skillClass: "Database",
    values: [
      { name: "Firestore", link: "https://firebase.google.com/docs/firestore" },
      { name: "Supabase Database", link: "https://supabase.com/database" },
      { name: "Xata", link: "https://xata.io/" },
      { name: "MongoDB", link: "https://www.mongodb.com/" },
    ],
  },
  {
    skillClass: "Data management",
    values: [
      {
        name: "React Query",
        link: "https://tanstack.com/query/latest",
      },
      { name: "SWR", link: "https://swr.vercel.app/" },
    ],
  },
  {
    skillClass: "Form management",
    values: [
      {
        name: "React Hook Form",
        link: "https://react-hook-form.com/",
      },
      {
        name: "Mantine Form",
        link: "https://mantine.dev/form/use-form/",
      },
    ],
  },
];
