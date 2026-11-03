/**
 * Comprehensive clinical data for PhysioCare (formerly Dr. Amit Jangir Practice)
 * Dadar West, Mumbai - Advanced Physiotherapy & Chiropractic Rehabilitation
 */

export const CLINIC_INFO = {
  name: "PhysioCare",
  brandSubtitle: "Advanced Physiotherapy & Chiropractic Rehabilitation Clinic",
  doctorName: "Dr. Amit Jangir",
  doctorTitle: "Head Consultant Physiotherapist & Spine Alignment Specialist",
  doctorQualifications: "BPT, MPT (Musculoskeletal), MIAP, Certified Chiropractic & Dry Needling Practitioner",
  experienceYears: 15,
  patientsTreated: "12,000+",
  successRate: "98.4%",
  googleRating: 4.9,
  totalReviews: 850,
  
  phone: "+91 93728 73293",
  altPhone: "+91 82918 41098",
  whatsapp: "+919372873293",
  email: "contact@physiocareclinic.com",
  doctorEmail: "dramitjangir.mumbai@gmail.com",
  
  address: {
    clinicName: "PhysioCare (O3 Physio Clinic)",
    unit: "Room No. 02, Ground Floor, Jogalekar Building",
    street: "Dadasaheb Rege Marg",
    landmark: "Directly Opposite Shiv Sena Bhavan",
    locality: "Dadar West",
    city: "Mumbai",
    state: "Maharashtra",
    pincode: "400028",
    nearStation: "Dadar Western & Central Railway Station (7 mins walk)",
  },
  
  timings: {
    weekdays: "Monday – Saturday: 8:00 AM – 9:00 PM",
    sunday: "Sunday: 9:00 AM – 2:00 PM (Emergency & Prior Appointments)",
    homeVisits: "7:00 AM – 8:00 PM (Across South & Central Mumbai)",
  },

  features: [
    "Non-Surgical Spine Decompression",
    "Evidence-Based Chiropractic Adjustments",
    "Clean & Sanitized Private Therapy Rooms",
    "Digital Posture & Gait Analysis",
    "Advanced US-FDA Approved Modalities",
    "Comprehensive At-Home Physio Care",
  ]
};

export const CLINIC_TEAM = [
  {
    id: "dr-amit-jangir",
    name: "Dr. Amit Jangir",
    role: "Founder & Lead Physiotherapist / Chiropractor",
    qualification: "BPT, MPT (Ortho & Spine), Certified Chiropractic Specialist",
    experience: "15+ Years Clinical Experience",
    speciality: "Spinal Alignment, Slip Disc Decompression, Sciatica, Manual Therapy",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=800&q=80",
    bio: "Dr. Amit Jangir is one of Mumbai's most trusted practitioners in non-surgical orthopedic and chiropractic care. Having treated over 12,000 patients, his clinical mastery combines precise spine adjustments, neuromuscular mobilization, and personalized exercise medicine."
  },
  {
    id: "dr-neha-sharma",
    name: "Dr. Neha Sharma",
    role: "Senior Consultant Neuro-Physiotherapist",
    qualification: "BPT, MPT (Neurology), Certified Bobath Therapist",
    experience: "9+ Years Experience",
    speciality: "Stroke Rehab, Parkinson's Mobility, Facial Palsy & Spinal Cord Injury",
    image: "https://images.unsplash.com/photo-1594824813583-1622081d4a04?auto=format&fit=crop&w=800&q=80",
    bio: "Specializing in adult neuro-rehabilitation, Dr. Neha helps patients regain motor autonomy and neural plasticity following stroke, brain injury, and neurological conditions."
  },
  {
    id: "dr-rajesh-kulkarni",
    name: "Dr. Rajesh Kulkarni",
    role: "Sports Rehabilitation & Biomechanics Specialist",
    qualification: "BPT, MPT (Sports Medicine), CSCS",
    experience: "8+ Years Experience",
    speciality: "ACL Reconstruction Rehab, Rotator Cuff Tears, Runner's Knee, Return-to-Play",
    image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=800&q=80",
    bio: "Consulting physiotherapist to national-level athletes, cricketers, and marathon runners. Expert in dynamic movement assessments, sports dry needling, and explosive strength conditioning."
  },
  {
    id: "dr-priya-deshmukh",
    name: "Dr. Priya Deshmukh",
    role: "Senior Ergonomics & Women's Health Specialist",
    qualification: "BPT, Certificate in Manual Therapy (Mulligan), Ergonomics Consultant",
    experience: "7+ Years Experience",
    speciality: "Tech-Neck, Postural Correction, Prenatal & Postnatal Pelvic Health",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=800&q=80",
    bio: "Passionate about workplace wellness and women's physical health, Dr. Priya works with corporate professionals to eliminate chronic desk pain and spinal fatigue."
  }
];

export const SERVICES = [
  {
    id: "chiropractic-adjustments",
    slug: "chiropractic-adjustments",
    title: "Chiropractic Care & Spine Adjustments",
    category: "Spine & Joint Alignment",
    shortDesc: "Precise, non-surgical spine and pelvic adjustments to relieve pinched nerves, restore vertebral alignment, and instantly alleviate stiffness.",
    fullDesc: "Our high-precision chiropractic adjustments utilize gentle, targeted manipulation of spinal vertebrae. By restoring physiological articulation and relieving pressure on impinged nerve roots, patients experience rapid decompression from chronic back pain, cervical stiffness, and pelvic misalignments.",
    duration: "40 – 45 mins",
    priceEstimate: "₹1,200 – ₹1,800",
    rating: 4.9,
    reviewsCount: 342,
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80",
    benefits: [
      "Immediate release of spinal joint restrictions and compression",
      "Restores natural cervical and lumbar lordotic curvature",
      "Reduces nerve irritation causing radiating sciatic pain",
      "Zero downtime with noticeable posture and range improvement"
    ],
    idealFor: [
      "Acute or chronic lower back pain",
      "Neck spasms and stiffness from prolonged screen time",
      "Pelvic tilt or leg-length discrepancy",
      "Mid-back rib head subluxations and tightness"
    ],
    procedureSteps: [
      "Comprehensive spinal palpation and range-of-motion testing",
      "Deep tissue pre-adjustment warm up using localized vibration therapy",
      "Targeted cervical, thoracic, and sacroiliac gentle adjustments",
      "Post-adjustment postural stability exercise guidance"
    ],
    faq: [
      {
        q: "Does a chiropractic adjustment hurt?",
        a: "Most patients feel immediate relief. You may hear a cavitation 'pop' sound, which is simply nitrogen gas releasing from the synovial joint capsule, not bones cracking."
      },
      {
        q: "How many sessions will I need?",
        a: "Acute stiffness often resolves in 2 to 4 sessions, whereas long-standing structural misalignments typically require 6 to 10 structured sessions."
      }
    ]
  },
  {
    id: "spinal-rehabilitation-slip-disc",
    slug: "spinal-rehabilitation-slip-disc",
    title: "Slip Disc & Spinal Rehabilitation",
    category: "Spine Care",
    shortDesc: "Advanced non-surgical spinal decompression therapy combined with core stabilization protocols for lumbar and cervical disc bulges.",
    fullDesc: "Specifically developed for patients suffering from L4-L5, L5-S1 disc herniation, annular tears, and cervical radiculopathy. We utilize state-of-the-art computerized mechanical traction, McKenzie extension protocols, and deep core neuromuscular re-education to pull disc material away from impinged neural pathways.",
    duration: "45 – 60 mins",
    priceEstimate: "₹1,000 – ₹1,500",
    rating: 4.9,
    reviewsCount: 420,
    image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80",
    benefits: [
      "Negative intra-discal pressure encourages disc retraction",
      "Eliminates shooting electric pain down legs or arms",
      "Strengthens deep multifidus and transversus abdominis stabilizers",
      "Helps over 90% of our disc patients avoid invasive spine surgeries"
    ],
    idealFor: [
      "Bulging or extruded lumbar/cervical discs",
      "Sciatica with numbness and tingling sensations",
      "Facet joint arthropathy and spinal stenosis",
      "Post-laminectomy recovery and strengthening"
    ],
    procedureSteps: [
      "Detailed MRI scan evaluation and dermatomal nerve testing",
      "Gentle motorized spinal decompression on dedicated traction unit",
      "Laser and interferential electrotherapy to reduce localized edema",
      "Individualized core activation and spine protection biomechanics"
    ],
    faq: [
      {
        q: "Can a slip disc heal without surgery?",
        a: "Yes! Medical studies confirm that the majority of disc bulges resorbed naturally when properly decompressed and supported by physical stabilization."
      }
    ]
  },
  {
    id: "cupping-therapy-hijama",
    slug: "cupping-therapy-hijama",
    title: "Cupping Therapy & Myofascial Decompression",
    category: "Specialized Therapy",
    shortDesc: "Dry, moving, and dynamic vacuum cupping to enhance microcirculation, flush metabolic toxins, and release recalcitrant fascia.",
    fullDesc: "Utilizing medical-grade silicone and polycarbonate negative-pressure cups, this therapy lifts connective fascia away from underlying muscle bundles. This produces immediate hyperemic blood flow, activates the lymphatic drainage network, and breaks down restrictive fibrous scar tissue.",
    duration: "30 – 40 mins",
    priceEstimate: "₹800 – ₹1,200",
    rating: 4.8,
    reviewsCount: 215,
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80",
    benefits: [
      "Deep release of rigid myofascial knots and trigger points",
      "Flushes stagnant lactic acid and cellular waste",
      "Boosts oxygen delivery and accelerates cellular healing",
      "Creates a profound sensation of muscular lightness and relaxation"
    ],
    idealFor: [
      "Chronic upper back knots and shoulder tension",
      "Athletic muscle fatigue and delayed onset muscle soreness (DOMS)",
      "Fibromyalgia and stubborn postural spasms",
      "Respiratory tightness and thoracic cage stiffness"
    ],
    procedureSteps: [
      "Palpation to locate high-density myofascial restriction zones",
      "Application of therapeutic oil for smooth dynamic gliding",
      "Placement of vacuum suction cups with monitored negative pressure",
      "Gentle active mobilization while cups remain applied (functional cupping)"
    ],
    faq: [
      {
        q: "Why do round circular marks appear and do they hurt?",
        a: "The harmless circular discolouration indicates therapeutic blood drawing to the surface. It is completely painless and fades naturally within 3 to 7 days."
      }
    ]
  },
  {
    id: "dry-needling-therapy",
    slug: "dry-needling-therapy",
    title: "Trigger Point Dry Needling",
    category: "Specialized Therapy",
    shortDesc: "Ultrafine filiform needle insertions directly into hyper-irritable taut muscular bands to terminate trigger points and deactivate referred pain.",
    fullDesc: "Administered by our certified dry needling clinicians, this Western evidence-based technique penetrates deep into stubborn muscular trigger points that manual hands cannot reach. The mechanical twitch response resets the neuromuscular junction and resets muscle resting tone.",
    duration: "30 – 40 mins",
    priceEstimate: "₹900 – ₹1,400",
    rating: 4.9,
    reviewsCount: 198,
    image: "https://images.unsplash.com/photo-1512290900672-1f55b9e59d48?auto=format&fit=crop&w=800&q=80",
    benefits: [
      "Inactivates painful chronic trigger points instantly",
      "Restores normal neurochemical balance in hyper-sensitized muscles",
      "Releases deep rotator cuff, gluteal, and piriformis contractures",
      "Significantly increases active painless joint excursion"
    ],
    idealFor: [
      "Tension headaches & chronic trapezius stiffness",
      "Piriformis syndrome & pseudo-sciatica",
      "Tennis / Golfer's elbow and forearm cramp",
      "Plantar fasciitis and recalcitrant calf tightness"
    ],
    procedureSteps: [
      "Pinpoint identification of taut myofascial taut bands",
      "Sterilization of target area with medical antiseptic",
      "Insertion of ultra-fine, sterile, single-use filiform needles",
      "Gentle electrical stimulation (Electro-dry needling) if indicated"
    ],
    faq: [
      {
        q: "Is dry needling the same as acupuncture?",
        a: "No. While both use fine needles, dry needling is based on modern neuroanatomy, trigger points, and western musculoskeletal science, whereas acupuncture is based on traditional Chinese meridians."
      }
    ]
  },
  {
    id: "sports-injury-rehab",
    slug: "sports-injury-rehab",
    title: "Sports Injury & Athletic Rehabilitation",
    category: "Sports Medicine",
    shortDesc: "Aggressive, functional rehabilitation protocols designed to return runners, cricketers, and gym athletes back to peak athletic performance.",
    fullDesc: "From acute field injuries to chronic tendinopathies, our sports physiotherapy protocol involves comprehensive video movement analysis, eccentric tendon loading, kinetic chain strengthening, and progressive agility drills.",
    duration: "45 – 60 mins",
    priceEstimate: "₹1,200 – ₹1,800",
    rating: 4.9,
    reviewsCount: 310,
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80",
    benefits: [
      "Minimizes downtime and prevents recurrent re-injury",
      "Corrects underlying biomechanical deficits and muscle imbalances",
      "Sport-specific agility, plyometric, and deceleration training",
      "Objective return-to-sport testing using strength dynamometry"
    ],
    idealFor: [
      "ACL, PCL, and Meniscus ligament rehabilitation",
      "Ankle sprains and chronic instability",
      "Rotator cuff tears and shoulder impingement",
      "Hamstring strains and groin pulls"
    ],
    procedureSteps: [
      "Biomechanical kinetic chain assessment",
      "Cryo-compression and ultrasound therapy for acute inflammation",
      "Targeted resistance loading using elastic bands and medical weights",
      "Dynamic agility and sport-simulated movement drills"
    ],
    faq: [
      {
        q: "When can I return to playing sports?",
        a: "We clear athletes based on objective performance benchmarks (90%+ limb symmetry score, zero pain during cutting drills), ensuring you return at full strength."
      }
    ]
  },
  {
    id: "neuro-rehab-stroke-paralysis",
    slug: "neuro-rehab-stroke-paralysis",
    title: "Stroke & Neurological Rehabilitation",
    category: "Neurology",
    shortDesc: "Dedicated neuro-physiotherapy for stroke recovery, hemiplegia, Parkinson's disease, and motor nerve retraining.",
    fullDesc: "Harnessing the brain's innate neuroplasticity, our specialized neuro-physiotherapy team utilizes Task-Oriented Motor Training, Bobath concepts, and sensory-motor facilitation to help neurological patients re-learn walking, balance, and arm function.",
    duration: "50 – 60 mins",
    priceEstimate: "₹1,200 – ₹1,800",
    rating: 4.9,
    reviewsCount: 184,
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80",
    benefits: [
      "Reduces debilitating spasticity and prevents joint contractures",
      "Retrains safe balance, sit-to-stand transfers, and independent gait",
      "Reactivates dormant neural pathways through repetitive functional tasks",
      "Empowers family caregivers with proper transfer techniques"
    ],
    idealFor: [
      "Post-stroke hemiparesis and paralysis",
      "Parkinson's disease gait freezing and balance loss",
      "Bell's palsy and facial nerve weakness",
      "Peripheral neuropathy and foot drop"
    ],
    procedureSteps: [
      "Functional independence and motor grade evaluation",
      "Weight-bearing sensory stimulation and muscle tone regulation",
      "Parallel-bar gait training with rhythmic cueing",
      "Fine motor dexterity drills for hand grasp and release"
    ],
    faq: [
      {
        q: "Is it too late to start stroke rehab after 6 months?",
        a: "No! While the first 3 months offer rapid neuroplastic gains, deliberate therapy continues to yield meaningful functional improvements even years post-stroke."
      }
    ]
  },
  {
    id: "post-surgical-rehab",
    slug: "post-surgical-rehab",
    title: "Post-Surgical Joint & Orthopedic Rehab",
    category: "Orthopedics",
    shortDesc: "Structured phase-by-phase recovery following Total Knee/Hip Replacement, Arthroscopy, and fracture fixations.",
    fullDesc: "Surgery is only half the battle. Our post-operative protocol works in close alignment with your orthopedic surgeon's guidelines to eliminate swelling, regain full joint flexion and extension, and rebuild surrounding muscular strength without stressing surgical repairs.",
    duration: "45 – 50 mins",
    priceEstimate: "₹1,000 – ₹1,500",
    rating: 4.9,
    reviewsCount: 265,
    image: "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?auto=format&fit=crop&w=800&q=80",
    benefits: [
      "Prevents arthrofibrosis (excessive joint scar tissue formation)",
      "Safely restores 0° extension and 120°+ flexion in replaced joints",
      "Eliminates reliance on walking sticks and walkers",
      "Safe, evidence-backed progression through surgeon protocols"
    ],
    idealFor: [
      "Total Knee Replacement (TKR) and Total Hip Replacement (THR)",
      "Arthroscopic Bankart repair and shoulder acromioplasty",
      "Spinal fusion and discectomy post-op recovery",
      "Post-cast stiffness after bone fracture consolidation"
    ],
    procedureSteps: [
      "Surgical incision inspection and gentle scar desensitization",
      "Continuous passive motion (CPM) and manual joint glides",
      "Progressive isometric and closed-kinetic-chain strengthening",
      "Stair-climbing retraining and independent ambulation"
    ],
    faq: [
      {
        q: "How soon after surgery should physiotherapy begin?",
        a: "Typically within 24 to 48 hours for bedside mobility, followed by clinic or home rehabilitation as soon as discharged."
      }
    ]
  },
  {
    id: "posture-ergonomics-tech-neck",
    slug: "posture-ergonomics-tech-neck",
    title: "Ergonomics & Posture Correction",
    category: "Preventive Care",
    shortDesc: "Targeted correction for forward-head posture ('Tech-Neck'), rounded shoulders, and computer fatigue.",
    fullDesc: "Designed for corporate desk professionals, software engineers, and students spending prolonged hours on laptops and smartphones. We combine digital posture screening, spinal mobilization, ergonomic workspace modifications, and postural endurance exercises.",
    duration: "40 – 45 mins",
    priceEstimate: "₹900 – ₹1,300",
    rating: 4.8,
    reviewsCount: 175,
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800&q=80",
    benefits: [
      "Reverses forward-head tilt and relieves cervical disc load",
      "Eliminates upper back burning sensations and tension headaches",
      "Customized workstation ergonomic assessment and setup plan",
      "Strengthens deep neck flexors and middle/lower trapezius"
    ],
    idealFor: [
      "Software developers and WFH professionals with neck strain",
      "Rounded shoulders and hunched thoracic posture (Kyphosis)",
      "Recurrent tension headaches originating from the suboccipital muscles",
      "General posture aesthetic and breathing capacity enhancement"
    ],
    procedureSteps: [
      "Photographic plumb-line posture analysis",
      "Thoracic spine extension mobilization and pectoral stretching",
      "Cervical retraction retraining and scapular retraction drills",
      "Ergonomic chair, monitor, and keyboard placement recommendations"
    ],
    faq: [
      {
        q: "Can posture really be corrected in adulthood?",
        a: "Yes. Postural muscle weakness and joint stiffness are reversible at any age with consistent corrective activation and ergonomic habits."
      }
    ]
  },
  {
    id: "home-visit-physiotherapy",
    slug: "home-visit-physiotherapy",
    title: "Home Visit Physiotherapy Service",
    category: "Home Care",
    shortDesc: "Premium, fully equipped clinical physiotherapy delivered in the comfort and safety of your home across Mumbai.",
    fullDesc: "For elderly patients, post-surgical cases, or individuals experiencing acute disabling pain, our senior physiotherapists bring portable electrotherapy, ultrasound machines, and therapeutic exercise equipment directly to your doorstep.",
    duration: "45 – 60 mins",
    priceEstimate: "₹1,500 – ₹2,200",
    rating: 4.9,
    reviewsCount: 290,
    image: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=800&q=80",
    benefits: [
      "Zero travel stress or painful transport for fragile patients",
      "Direct assessment of home hazards (rugs, bathrooms, stairs)",
      "Flexible morning and evening slots tailored to your schedule",
      "Family involvement in daily recovery and movement routines"
    ],
    idealFor: [
      "Elderly patients with mobility restrictions or dementia",
      "Immediate post-operative days after knee/hip replacement",
      "Severe acute back spasm unable to sit in a car",
      "Bedbound neurological or palliative patients"
    ],
    procedureSteps: [
      "Phone pre-consultation to understand specific medical conditions",
      "Therapist arrival with sanitized portable equipment",
      "Complete 45-60 minute hands-on therapy and exercises",
      "Daily progress charting shared with family members"
    ],
    faq: [
      {
        q: "Which areas in Mumbai do you cover for home visits?",
        a: "We actively cover Dadar, Prabhadevi, Worli, Lower Parel, Bandra, Mahim, Matunga, Sion, and central Mumbai locations."
      }
    ]
  }
];

export const CONDITIONS = [
  {
    id: "slip-disc",
    name: "Slip Disc / Disc Herniation",
    bodyRegion: "spine",
    bodyRegionLabel: "Spine & Lower Back",
    severity: "Moderate to Severe",
    overview: "A condition where the soft cushion (nucleus pulposus) between spinal bones pushes out through a tear in the tougher exterior ring, often impinging adjacent nerve roots.",
    symptoms: [
      "Sharp, burning lower back pain aggravated by bending or sitting",
      "Radiating pain down the buttock, thigh, calf, or foot (Sciatica)",
      "Numbness, tingling ('pins and needles') in toes or foot",
      "Muscle weakness when lifting the foot or walking on heels"
    ],
    treatmentProtocol: "Combination of computerized spinal decompression, gentle chiropractic flexion-distraction, electro-analgesia, and progressive core stabilization.",
    recommendedServiceId: "spinal-rehabilitation-slip-disc",
    homeExercises: [
      "Prone press-ups (McKenzie extension)",
      "Bird-Dog stabilization drills",
      "Cat-Cow gentle spinal mobility",
      "Strict avoidance of loaded forward flexion"
    ]
  },
  {
    id: "cervical-spondylosis",
    name: "Cervical Spondylosis & Neck Pain",
    bodyRegion: "neck",
    bodyRegionLabel: "Neck & Upper Spine",
    severity: "Mild to Moderate",
    overview: "Age-related or posture-induced wear and tear affecting the spinal disks in your neck, causing disc dehydration, bone spurs, and severe muscular spasm.",
    symptoms: [
      "Chronic neck stiffness, especially in the morning or after computer work",
      "Referred pain radiating into the shoulder blades and arms",
      "Occipital headaches starting from base of the skull",
      "Grinding or popping sensation when turning the head"
    ],
    treatmentProtocol: "Chiropractic cervical realignment, dry needling to suboccipitals and levator scapulae, traction, and deep postural re-education.",
    recommendedServiceId: "chiropractic-adjustments",
    homeExercises: [
      "Chin tucks with 5-second isometric hold",
      "Upper trapezius and levator scapulae gentle stretches",
      "Scapular wall slides for postural endurance",
      "Isometric neck flexion and extension"
    ]
  },
  {
    id: "frozen-shoulder",
    name: "Frozen Shoulder (Adhesive Capsulitis)",
    bodyRegion: "shoulder",
    bodyRegionLabel: "Shoulder & Upper Arm",
    severity: "Moderate",
    overview: "An insidious condition characterized by severe stiffness and pain in the shoulder joint capsule, drastically limiting both active and passive motion.",
    symptoms: [
      "Severe dull ache aggravated at night, making sleeping on the side impossible",
      "Inability to reach behind back (e.g. hooking a bra or reaching back pocket)",
      "Inability to raise the arm above shoulder height",
      "Progressive worsening over 3 defined stages (Freezing, Frozen, Thawing)"
    ],
    treatmentProtocol: "Gentle Maitland and Mulligan joint mobilizations, therapeutic ultrasound to deep capsule, dynamic cupping, and hydro-dilation rehabilitation.",
    recommendedServiceId: "post-surgical-rehab",
    homeExercises: [
      "Pendulum (Codman's) swings with relaxed arm",
      "Towel stretch behind the back",
      "Finger-walk up the wall exercise",
      "Cross-body arm stretch for posterior capsule"
    ]
  },
  {
    id: "knee-osteoarthritis",
    name: "Knee Osteoarthritis & Cartilage Wear",
    bodyRegion: "knee",
    bodyRegionLabel: "Knee & Lower Limb",
    severity: "Mild to Severe",
    overview: "Progressive loss of articular joint cartilage in the knee joint leading to bone-on-bone friction, osteophyte development, and stiffness.",
    symptoms: [
      "Knee stiffness when rising from a chair or in the morning",
      "Crepitus (crackling or popping sound during knee bending)",
      "Pain when descending or climbing stairs",
      "Swelling around the knee joint after walking long distances"
    ],
    treatmentProtocol: "High-intensity therapeutic laser, manual patellofemoral glides, quadriceps strengthening, and customized unloader bracing recommendations.",
    recommendedServiceId: "post-surgical-rehab",
    homeExercises: [
      "Static quadriceps sets with towel roll under knee",
      "Straight leg raises (SLR) with ankle dorsiflexion",
      "Hamstring curls in standing",
      "Low-impact cycling or hydrotherapy"
    ]
  },
  {
    id: "sciatica-nerve-pain",
    name: "Sciatica & Piriformis Syndrome",
    bodyRegion: "spine",
    bodyRegionLabel: "Lower Back & Leg",
    severity: "Moderate to Severe",
    overview: "Irritation or mechanical compression of the sciatic nerve—the longest nerve in the human body—either at the lumbar spine or deep in the buttock by the piriformis muscle.",
    symptoms: [
      "Constant burning or electrical shock sensation in one buttock and leg",
      "Pain made worse by prolonged sitting, driving, or coughing",
      "Pins and needles sensation extending to calf and toes",
      "Difficulty standing up straight due to nerve tension"
    ],
    treatmentProtocol: "Targeted dry needling to the piriformis muscle, chiropractic pelvic leveling, neurodynamic nerve flossing glides, and traction.",
    recommendedServiceId: "chiropractic-adjustments",
    homeExercises: [
      "Sciatic nerve flossing technique",
      "Seated or supine figure-4 piriformis stretch",
      "Gentle knee-to-opposite-shoulder stretch",
      "Short walking intervals with frequent posture resets"
    ]
  },
  {
    id: "plantar-fasciitis",
    name: "Plantar Fasciitis & Heel Pain",
    bodyRegion: "foot",
    bodyRegionLabel: "Foot & Ankle",
    severity: "Mild to Moderate",
    overview: "Inflammation and micro-tearing of the thick band of fibrous tissue that traverses the bottom of your foot and connects your heel bone to your toes.",
    symptoms: [
      "Agonizing first few steps out of bed in the morning",
      "Stabbing heel pain that dulls during walking but returns after resting",
      "Pain triggered after long periods of standing or running",
      "Tenderness when pressing the inner base of the heel"
    ],
    treatmentProtocol: "Extracorporeal shockwave therapy (ESWT), deep plantar fascia instrument-assisted soft tissue mobilization (IASTM), dry needling to gastrocnemius, and orthotic evaluation.",
    recommendedServiceId: "sports-injury-rehab",
    homeExercises: [
      "Frozen water bottle rolling under the arch for 5 mins",
      "Gastroc and soleus calf wall stretches with heel on floor",
      "Toe scrunches with a towel to strengthen intrinsic foot muscles",
      "Plantar fascia manual stretch before stepping out of bed"
    ]
  },
  {
    id: "tennis-elbow",
    name: "Tennis Elbow (Lateral Epicondylitis)",
    bodyRegion: "arm",
    bodyRegionLabel: "Elbow & Forearm",
    severity: "Mild to Moderate",
    overview: "Tendinopathy caused by repetitive wrist extension and forearm gripping, creating micro-tears in the extensor carpi radialis brevis tendon.",
    symptoms: [
      "Pain and burning on the outer part of your elbow",
      "Weak grip strength when holding a coffee mug or shaking hands",
      "Pain exacerbated by turning door handles or opening jars",
      "Tender point approximately 1 cm below the lateral bone epicondyle"
    ],
    treatmentProtocol: "Cross-friction manual therapy, dry needling to extensor mass, therapeutic ultrasound, and eccentric Tyler Twist exercises.",
    recommendedServiceId: "dry-needling-therapy",
    homeExercises: [
      "Eccentric wrist extension loading with lightweight dumbbell",
      "Forearm extensor and flexor passive stretches",
      "Tyler Twist exercise using a rubber resistance bar",
      "Ergonomic vertical mouse usage for computer work"
    ]
  },
  {
    id: "ankylosing-spondylitis",
    name: "Ankylosing Spondylitis & Spine Stiffness",
    bodyRegion: "spine",
    bodyRegionLabel: "Spine & Sacroiliac",
    severity: "Moderate to Chronic",
    overview: "A form of inflammatory arthritis that primarily affects the spine, causing chronic inflammation of vertebrae that can lead to joint fusion and rigid posture.",
    symptoms: [
      "Early morning back pain and stiffness lasting more than 45 minutes",
      "Pain that improves with movement and exercise, but worsens with rest",
      "Deep buttock and sacroiliac joint tenderness",
      "Reduced chest expansion during deep breathing"
    ],
    treatmentProtocol: "Careful non-rotational spinal mobilization, hydrotherapy principles, thoracic expansion drills, and customized postural maintenance programs.",
    recommendedServiceId: "spinal-rehabilitation-slip-disc",
    homeExercises: [
      "Deep diaphragmatic breathing with arms raised overhead",
      "Prone lying for 15-20 minutes daily to counteract flexion bias",
      "Gentle rotational trunk twists while lying on back",
      "Scapular retractions against resistance band"
    ]
  }
];

export const PATIENT_REVIEWS = [
  {
    id: "rev-1",
    name: "Sunil Wankhede",
    age: 44,
    location: "Dadar, Mumbai",
    conditionTreated: "Severe L4-L5 Slip Disc & Sciatica",
    rating: 5,
    date: "12 Oct 2026",
    verified: true,
    doctor: "Dr. Amit Jangir",
    comment: "I was advised spine surgery by two neurosurgeons due to excruciating sciatica down my left leg. A colleague recommended Dr. Amit Jangir at PhysioCare. Within 12 sessions of spinal decompression and chiropractic adjustments, my pain dropped from 9/10 to virtually zero! I am back to walking 5 km every day without any surgery. A true lifesaver!",
    recoveryWeeks: "4 Weeks"
  },
  {
    id: "rev-2",
    name: "Ananya Deshpande",
    age: 31,
    location: "Prabhadevi, Mumbai",
    conditionTreated: "Cervical Spondylosis & Migraine Headaches",
    rating: 5,
    date: "28 Sep 2026",
    verified: true,
    doctor: "Dr. Amit Jangir",
    comment: "Working 10+ hours a day on a laptop gave me debilitating neck spasms and daily headaches. Dr. Amit's chiropractic adjustments and dry needling completely unlocked my neck in just 3 sessions. The clinic is spotlessly clean and the explanation of my posture was eye-opening. Best physiotherapy clinic in Mumbai!",
    recoveryWeeks: "2 Weeks"
  },
  {
    id: "rev-3",
    name: "Karan Mehta",
    age: 27,
    location: "Bandra West, Mumbai",
    conditionTreated: "ACL Reconstruction Post-Op Rehab",
    rating: 5,
    date: "05 Aug 2026",
    verified: true,
    doctor: "Dr. Rajesh Kulkarni",
    comment: "Post ACL reconstruction on my right knee, I was terrified of losing my athletic agility. The team at PhysioCare designed a brilliant progression of manual patella mobilization, muscle stimulator, and functional gym drills. Reached 135 degree flexion by week 6. Highly disciplined and scientific approach.",
    recoveryWeeks: "8 Weeks"
  },
  {
    id: "rev-4",
    name: "Meenakshi K.",
    age: 58,
    location: "Worli, Mumbai",
    conditionTreated: "Frozen Shoulder (Adhesive Capsulitis)",
    rating: 5,
    date: "18 Jul 2026",
    verified: true,
    doctor: "Dr. Amit Jangir",
    comment: "For 7 months I couldn't comb my hair or dress myself without tears. At PhysioCare, the cupping therapy combined with gentle joint mobilization did wonders. I felt the stiffness melting away by the 5th session. Grateful to Dr. Amit and the polite clinic staff.",
    recoveryWeeks: "5 Weeks"
  },
  {
    id: "rev-5",
    name: "Rameshwar Rao",
    age: 69,
    location: "Matunga, Mumbai",
    conditionTreated: "Post-Stroke Hemiparesis Rehabilitation",
    rating: 5,
    date: "02 Jun 2026",
    verified: true,
    doctor: "Dr. Neha Sharma",
    comment: "My father had a stroke leaving his right side weak and uncoordinated. We opted for PhysioCare's home visit service. Dr. Neha was extraordinarily patient, cheerful, and thorough. In 2 months, my father progressed from wheelchair bound to walking with minimal support. God bless this dedicated team.",
    recoveryWeeks: "10 Weeks"
  },
  {
    id: "rev-6",
    name: "Vikram Singhania",
    age: 38,
    location: "Lower Parel, Mumbai",
    conditionTreated: "Chronic Lower Back Spasm & Pelvic Tilt",
    rating: 5,
    date: "14 May 2026",
    verified: true,
    doctor: "Dr. Amit Jangir",
    comment: "The chiropractic spine realignment was unbelievable. That gentle pop relieved 3 years of dull aching sensation in my lower back within seconds. The follow up strengthening program keeps it pain-free. Worth every single penny.",
    recoveryWeeks: "3 Weeks"
  }
];

export const VIDEO_CASES = [
  {
    id: "case-1",
    title: "Patient Recovery Story: Severe Slip Disc Healed Non-Surgically",
    patientName: "Mr. Ramesh (48 yrs)",
    diagnosis: "L4-L5 Extruded Disc with Sciatica",
    outcome: "Pain reduced from VAS 9 to 0 in 14 sessions",
    duration: "4:30 mins",
    aspectRatio: "16:9",
    thumbnailLabel: "Clinical Case Study & Adjustment Footage"
  },
  {
    id: "case-2",
    title: "Instant Chiropractic Neck & Upper Spine Adjustment for Tech-Neck",
    patientName: "Ms. Shalini (29 yrs)",
    diagnosis: "Forward Head Posture & Thoracic Kyphosis",
    outcome: "Immediate 35% increase in cervical rotation",
    duration: "3:15 mins",
    aspectRatio: "16:9",
    thumbnailLabel: "Full Spine Chiropractic Demonstration"
  },
  {
    id: "case-3",
    title: "Dry Needling & Myofascial Release for Chronic Runner's Knee",
    patientName: "Aditya (34 yrs, Marathon Runner)",
    diagnosis: "Patellofemoral Pain Syndrome & IT Band Friction",
    outcome: "Completed Mumbai Half-Marathon pain-free",
    duration: "5:10 mins",
    aspectRatio: "16:9",
    thumbnailLabel: "Sports Physiotherapy Protocol in Action"
  }
];

export const BLOG_POSTS = [
  {
    id: "understanding-slip-disc-surgery-myths",
    slug: "understanding-slip-disc-surgery-myths",
    title: "Understanding Slip Disc: Why Surgery Is Rarely The Only Solution",
    category: "Spine Health",
    readTime: "5 min read",
    date: "Oct 24, 2026",
    author: "Dr. Amit Jangir",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80",
    summary: "Over 90% of lumbar disc herniations can be successfully managed without surgical intervention through targeted mechanical decompression and stabilizing exercise therapy.",
    content: `When patients receive an MRI report stating 'L4-L5 disc bulge with thecal sac indentation', panic often sets in. Many assume that surgery is the only path back to a normal life. However, modern spinal biomechanics and non-surgical decompression therapy tell a very different, hopeful story.
    
    ### How Disc Herniation Occurs
    The spinal disc acts as a shock-absorbing hydraulic cushion between two vertebrae. Due to repetitive loaded bending, prolonged slumped sitting, or sudden heavy lifting, the tough outer annulus fibrosus can weaken, permitting the gel-like nucleus pulposus to bulge outward. If this bulge touches an exiting spinal nerve root, it triggers radiating sciatic nerve inflammation.
    
    ### The Power of Computerized Decompression
    Unlike static rest, modern computerized spinal traction applies cyclical negative pressure to the target intervertebral disc space. This creates an internal vacuum effect, encouraging protruding disc material to draw back toward the center while drawing in nutrient-rich blood and water.
    
    ### Key Takeaways for Patients:
    1. An MRI shows anatomy, not your level of function. Many people with disc bulges live completely pain-free once inflammation is controlled.
    2. Bed rest prolongs recovery. Early, safe mobilization under physiotherapy supervision is vital.
    3. Strengthen your inner corset: the transversus abdominis and deep multifidus muscles are your spine's natural protective brace.`
  },
  {
    id: "desk-workers-guide-tech-neck",
    slug: "desk-workers-guide-tech-neck",
    title: "The Modern Desk Worker's Survival Guide to Tech-Neck",
    category: "Ergonomics",
    readTime: "4 min read",
    date: "Sep 15, 2026",
    author: "Dr. Priya Deshmukh",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800&q=80",
    summary: "For every inch your head angles forward, your neck muscles bear an additional 10 pounds of gravitational force. Here is how to eliminate work fatigue.",
    content: `In an era of dual monitors, smartphones, and 8-hour Zoom sessions, 'Tech-Neck' has become the single most common reason young professionals visit our Dadar clinic.
    
    ### The Mathematics of Forward Head Posture
    An adult human head weighs approximately 10 to 12 pounds in neutral alignment. When tilted forward just 15 degrees, the effective load on your cervical spine skyrockets to 27 pounds. At a 45-degree angle—the typical smartphone browsing posture—your neck is bearing nearly 49 pounds of continuous strain!
    
    ### 3 Instant Adjustments You Can Make Today:
    1. **Raise your screen:** The top third of your computer monitor should be directly at eye level so your gaze is horizontal.
    2. **The 30-Minute Chin Tuck:** Every 30 minutes, perform 5 gentle chin retractions. Imagine making a gentle double chin while looking straight ahead.
    3. **Support your elbows:** If your forearms are unsupported, your shoulder trapezius muscles contract constantly just to hold up your arms.`
  },
  {
    id: "dry-needling-vs-acupuncture",
    slug: "dry-needling-vs-acupuncture",
    title: "Dry Needling vs Acupuncture: Understanding the Clinical Differences",
    category: "Treatment Science",
    readTime: "6 min read",
    date: "Aug 29, 2026",
    author: "Dr. Amit Jangir",
    image: "https://images.unsplash.com/photo-1512290900672-1f55b9e59d48?auto=format&fit=crop&w=800&q=80",
    summary: "While both treatments use ultra-fine stainless steel needles, their scientific foundations, assessment methods, and clinical targets are fundamentally different.",
    content: `Patients frequently ask: 'Is dry needling just another word for acupuncture?' While they share the physical tool of ultra-fine filiform needles, their principles diverge completely.
    
    ### Traditional Acupuncture
    Acupuncture is rooted in Traditional Chinese Medicine (TCM) dating back thousands of years. It focuses on balancing the flow of energy or life force—known as Qi (chi)—believed to circulate through 14 designated meridians throughout the body.
    
    ### Trigger Point Dry Needling
    Dry needling, by contrast, is a strictly Western evidence-based medical treatment. It was developed through myofascial pain research pioneered by Dr. Janet Travell. The practitioner physically palpates taut muscular bands to pinpoint hyper-irritable trigger points.
    
    ### What Happens During a Session?
    When the needle enters an active trigger point, the muscle produces an involuntary local twitch response (LTR). This mechanical twitch resets the neuromuscular spindle, reduces biochemical irritants (like substance P), and allows the muscle fibers to relax back to their physiological resting length.`
  }
];

export const FAQS = [
  {
    q: "Do I need a doctor's referral or prescription to visit PhysioCare?",
    a: "No, a doctor's referral is not required. Physiotherapists are primary healthcare practitioners. However, if you already possess X-rays, MRI scans, or surgical discharge summaries, please bring them so our specialists can review them during your initial evaluation."
  },
  {
    q: "What should I wear to my physiotherapy or chiropractic appointment?",
    a: "Please wear comfortable, loose-fitting athletic or casual clothing (such as gym shorts, track pants, or a t-shirt) that permits easy examination of the injured joint, spine, or limbs."
  },
  {
    q: "How long is a typical consultation and therapy session?",
    a: "Your initial consultation and comprehensive assessment takes approximately 45 to 60 minutes. Follow-up treatment sessions typically last between 35 and 50 minutes depending on the specific modality and rehabilitation exercises prescribed."
  },
  {
    q: "Is chiropractic spine adjustment safe?",
    a: "Yes. When performed by a qualified, degree-holding professional with specialized clinical credentials like Dr. Amit Jangir, chiropractic manipulation is one of the safest, non-invasive therapies for spinal and musculoskeletal conditions."
  },
  {
    q: "How do I book a home visit physiotherapy session?",
    a: "You can book directly through our online appointment portal on this website, call us at +91 93728 73293, or send a message via WhatsApp. Our clinical coordinator will confirm the therapist's arrival time and bring portable treatment modalities to your home."
  },
  {
    q: "Do you accept health insurance or provide medical receipts?",
    a: "Yes! While physical therapy is typically claimed under Outpatient (OPD) or post-hospitalization rehabilitation benefits, we issue detailed, stamped tax invoices and medical treatment certificates with practitioner registration numbers for seamless reimbursement submission."
  },
  {
    q: "What if I experience soreness after my first session?",
    a: "Mild muscle soreness or stiffness—similar to having completed a workout after a long period of inactivity—is completely normal for 24 to 48 hours following deep myofascial release, dry needling, or chiropractic adjustments. Gentle movement and adequate hydration help it subside quickly."
  }
];

export const GALLERY_ITEMS = [
  {
    id: "gal-1",
    title: "Advanced Spinal Decompression & Mechanical Traction Unit",
    category: "Equipment",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80",
    desc: "Computerized lumbar and cervical traction tables designed for precise disc decompression."
  },
  {
    id: "gal-2",
    title: "Private Manual Therapy & Chiropractic Suite",
    category: "Clinic",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80",
    desc: "Sanitized, climate-controlled individual treatment chambers ensuring total patient privacy."
  },
  {
    id: "gal-3",
    title: "Neuro-Rehabilitation & Gait Training Area",
    category: "Rehabilitation",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80",
    desc: "Equipped with parallel walking bars, balance boards, and specialized resistance equipment."
  },
  {
    id: "gal-4",
    title: "Electrotherapy & High-Intensity Ultrasound Stations",
    category: "Equipment",
    image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80",
    desc: "US-FDA approved TENS, IFT, Russian stimulation, and continuous ultrasonic therapy units."
  },
  {
    id: "gal-5",
    title: "Trigger Point Dry Needling & Cupping Lab",
    category: "Therapy",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80",
    desc: "Sterile, single-use needle setups and medical-grade negative pressure suction cups."
  },
  {
    id: "gal-6",
    title: "Dadar West Clinic Entrance & Patient Reception",
    category: "Clinic",
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80",
    desc: "Convenient ground floor access directly opposite Shiv Sena Bhavan in Dadar West."
  }
];
