export interface Note {
  id: string;
  title: string;
  pages: number;
}

export interface Chapter {
  id: string;
  name: string;
  notes: Note[];
}

export interface Subject {
  id: string;
  name: string;
  icon: string;
  chapters: Chapter[];
}

export interface Block {
  id: string;
  name: string;
  subjects: Subject[];
}

export interface Year {
  id: number;
  label: string;
  blocks: Block[];
}

export const curriculum: Year[] = [
  {
    id: 1, label: "Foundation",
    blocks: [
      {
        id: "1a", name: "Block A",
        subjects: [
          {
            id: "anat", name: "Anatomy", icon: "🦴",
            chapters: [
              { id: "thorax", name: "Thorax", notes: [{ id: "n1", title: "Thorax Overview", pages: 12 }, { id: "n2", title: "Thoracic Cavity Notes", pages: 8 }] },
              { id: "abdomen", name: "Abdomen", notes: [{ id: "n3", title: "Abdominal Wall", pages: 10 }, { id: "n4", title: "GI Tract Anatomy", pages: 15 }] },
              { id: "upper-limb", name: "Upper Limb", notes: [{ id: "n5", title: "Shoulder & Arm", pages: 14 }] },
            ],
          },
          {
            id: "physio", name: "Physiology", icon: "❤️",
            chapters: [
              { id: "cardio", name: "Cardiovascular System", notes: [{ id: "n6", title: "Heart Physiology", pages: 18 }, { id: "n7", title: "Blood Pressure Regulation", pages: 9 }] },
              { id: "resp", name: "Respiratory System", notes: [{ id: "n8", title: "Lung Mechanics", pages: 11 }] },
            ],
          },
          {
            id: "biochem", name: "Biochemistry", icon: "🧪",
            chapters: [
              { id: "carbs", name: "Carbohydrate Metabolism", notes: [{ id: "n9", title: "Glycolysis & TCA", pages: 16 }] },
              { id: "proteins", name: "Protein Metabolism", notes: [{ id: "n10", title: "Amino Acid Pathways", pages: 13 }] },
            ],
          },
        ],
      },
      {
        id: "1b", name: "Block B",
        subjects: [
          {
            id: "histo", name: "Histology", icon: "🔬",
            chapters: [
              { id: "epithelium", name: "Epithelial Tissue", notes: [{ id: "n11", title: "Types of Epithelium", pages: 7 }] },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 2, label: "Pre-Clinical",
    blocks: [
      {
        id: "2a", name: "Block A",
        subjects: [
          {
            id: "patho", name: "Pathology", icon: "🔬",
            chapters: [
              { id: "inflam", name: "Inflammation", notes: [{ id: "n12", title: "Acute & Chronic Inflammation", pages: 20 }] },
              { id: "neo", name: "Neoplasia", notes: [{ id: "n13", title: "Tumor Biology", pages: 18 }] },
            ],
          },
          {
            id: "pharma", name: "Pharmacology", icon: "💊",
            chapters: [
              { id: "ans", name: "Autonomic Nervous System", notes: [{ id: "n14", title: "ANS Drugs Overview", pages: 14 }] },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 3, label: "Para-Clinical",
    blocks: [{ id: "3a", name: "Block A", subjects: [{ id: "micro", name: "Microbiology", icon: "🦠", chapters: [{ id: "bact", name: "Bacteriology", notes: [{ id: "n15", title: "Gram Positive Cocci", pages: 12 }] }] }] }],
  },
  {
    id: 4, label: "Clinical I",
    blocks: [{ id: "4a", name: "Block A", subjects: [{ id: "medicine", name: "Medicine", icon: "🩺", chapters: [{ id: "cardio-med", name: "Cardiology", notes: [{ id: "n16", title: "Heart Failure Management", pages: 16 }] }] }] }],
  },
  {
    id: 5, label: "Clinical II",
    blocks: [{ id: "5a", name: "Block A", subjects: [{ id: "surgery", name: "Surgery", icon: "🔪", chapters: [{ id: "gi-surg", name: "GI Surgery", notes: [{ id: "n17", title: "Appendicitis Notes", pages: 10 }] }] }] }],
  },
];
