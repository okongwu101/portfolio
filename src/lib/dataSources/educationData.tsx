import { bachelorTranscript, diplomaTranscript, fellowshipTranscript, mastersTranscript } from "./transcriptsData";





export type educationDataType = {
  qualification: string;
  school: string;
  acronym: string;
  year: string;
  transcript: string[];
  transcriptTitle: string;
}


export const educationData = [
  {
    qualification:
      "Fellow West African College of Physician [Community Health]",
    school: "West African College of Physicians",
    acronym: "FWACP",
    year: "Nov. 2019",
    resumeLink: "",
    transcript: fellowshipTranscript,
    transcriptTitle: "Fellowship Transcript"
  },

  {
    qualification: "MSc Health Informatics",
    school: "University of Leeds, United Kingdom",
    acronym: "MSc-HI",
    year: "Nov. 2018",
    resumeLink: "",
    transcript: mastersTranscript,
    transcriptTitle: "Masters Transcript"
  },

  {
    qualification: "Diploma in Health Informatics",
    school: "Health Informatics Consulting Ltd, United Kingdom",
    acronym: "[Dip-HI]",
    year: "Mar. 2014",
    resumeLink: "",
    transcript: diplomaTranscript,
    transcriptTitle: "Diploma Transcript"
  },

  {
    qualification: "Bachelor of Medicine, Bachelor of Surgery",
    school: "Abia State University, Uturu Nigeria",
    acronym: "[MBBS]",
    year: "Dec. 2007",
    resumeLink: "",
    transcript: bachelorTranscript,
    transcriptTitle: "Bachelors Transcript"
  },
];