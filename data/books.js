const BOOKS = [
  {
    id: "confessions",
    title: "Confessions",
    author: "St. Augustine of Hippo",
    authorId: "st-augustine",
    century: "4th-5th",
    difficulty: "Moderate",
    readingTime: "8-10 hours",
    themes: ["Conversion", "Grace", "Restlessness", "Memory", "God's mercy"],
    whoShouldRead: "Anyone seeking deeper understanding of conversion, grace, and the restless human heart.",
    summary: "The first great spiritual autobiography in Western literature. Augustine recounts his journey from sin to conversion, exploring the nature of memory, time, desire, and God's grace.",
    chapterGuide: [
      "Book I: Infancy and childhood — the origins of sin",
      "Book II-III: Youth and the pull of pleasure",
      "Book IV-V: Manichaeism and the death of a friend",
      "Book VI-VIII: The struggle for faith, Monica's prayers",
      "Book IX: Conversion and baptism",
      "Book X: Memory and the presence of God",
      "Book XI-XIII: Commentary on Genesis and creation"
    ],
    importantPassages: [
      { text: "Late have I loved you, beauty so old and so new", location: "Book X" },
      { text: "You have made us for yourself, O Lord", location: "Book I" },
      { text: "The whole city of man is restless", location: "Book VIII" }
    ],
    relatedSeasons: ["desolation", "conversion", "prayer"],
    relatedBooks: ["city-of-god"],
    relatedSaints: ["st-augustine", "st-monica"],
    readingPlan: "Read one book per day. Take time to reflect on each chapter before moving on.",
    studyQuestions: [
      "What is Augustine's 'restless heart' seeking?",
      "How does Monica's prayer influence Augustine's conversion?",
      "What role does memory play in Augustine's spiritual life?"
    ],
    journalPrompts: [
      "What are you restless for?",
      "Write about a moment of conversion in your own life.",
      "How does God's patience with Augustine encourage you?"
    ]
  },
  {
    id: "interior-castle",
    title: "The Interior Castle",
    author: "St. Teresa of Avila",
    authorId: "st-teresa-avila",
    century: "16th",
    difficulty: "Moderate to Challenging",
    readingTime: "6-8 hours",
    themes: ["Prayer", "Mystical union", "Self-knowledge", "Spiritual growth"],
    whoShouldRead: "Those seeking a comprehensive map of the spiritual journey from beginning to union with God.",
    summary: "Teresa describes the soul as a castle with seven mansions, each representing a deeper stage of prayer and union with God. The journey inward leads to the center where God dwells.",
    chapterGuide: [
      "Mansion I: Self-knowledge and the beginning of prayer",
      "Mansion II: The water of prayer — meditation",
      "Mansion III: The transition from meditation to contemplation",
      "Mansion IV: Inner peace and the prayer of quiet",
      "Mansion V: The prayer of union",
      "Mansion VI: Spiritual betrothal — transforming union",
      "Mansion VII: Spiritual marriage — permanent union with God"
    ],
    importantPassages: [
      { text: "The soul is like a castle made entirely of glass", location: "Mansion I" },
      { text: "God alone is enough", location: "Mansion VII" },
      { text: "Prayer is nothing else than a friendly conversation", location: "Mansion I" }
    ],
    relatedSeasons: ["prayer", "contemplation", "dark-night", "union-with-god"],
    relatedBooks: ["way-of-perfection", "dark-night"],
    relatedSaints: ["st-teresa-avila", "st-john-cross"],
    readingPlan: "Read one mansion per week. Journal your reflections after each mansion.",
    studyQuestions: [
      "Which mansion do you feel you are currently in?",
      "What obstacles does Teresa identify on the spiritual journey?",
      "How does Teresa's understanding of prayer differ from common misconceptions?"
    ],
    journalPrompts: [
      "Describe your own interior castle — what do you see?",
      "What mansion feels like your current home?",
      "What is God inviting you to leave behind to go deeper?"
    ]
  },
  {
    id: "dark-night",
    title: "Dark Night of the Soul",
    author: "St. John of the Cross",
    authorId: "st-john-cross",
    century: "16th",
    difficulty: "Challenging",
    readingTime: "5-7 hours",
    themes: ["Purification", "Dark night", "Mystical union", "Detachment"],
    whoShouldRead: "Those undergoing spiritual trials or seeking understanding of the deeper stages of purification.",
    summary: "John of the Cross explains the two 'dark nights' — of the senses and of the spirit — through which God purifies the soul for divine union.",
    chapterGuide: [
      "Book I: Dark Night of the Senses — why God leads the soul through spiritual dryness",
      "Book II: Dark Night of the Spirit — the deeper purification of the soul's faculties",
      "Poetry: The Dark Night poem that inspired the commentary"
    ],
    importantPassages: [
      { text: "If a man wishes to be sure of the road he treads on, he must close his eyes and walk in the dark", location: "Book I" },
      { text: "The soul that is attached to anything will not arrive at divine union", location: "Book I" },
      { text: "To come to the knowledge you have not, you must go by a way in which you know not", location: "Book I" }
    ],
    relatedSeasons: ["dark-night", "desolation", "purification", "union-with-god"],
    relatedBooks: ["ascent-of-mount-carmel", "interior-castle"],
    relatedSaints: ["st-john-cross", "st-teresa-avila"],
    readingPlan: "Read slowly, one chapter per day. Sit with the poetry before reading the commentary.",
    studyQuestions: [
      "What is the difference between the dark night and spiritual desolation?",
      "Why does God use darkness to lead the soul to Himself?",
      "What attachments might God be purifying in you?"
    ],
    journalPrompts: [
      "Are you in a dark night? Describe what you are experiencing.",
      "What attachments is God asking you to release?",
      "How does the promise of divine union sustain you?"
    ]
  },
  {
    id: "introduction-devout-life",
    title: "Introduction to the Devout Life",
    author: "St. Francis de Sales",
    authorId: "st-francis-de-sales",
    century: "17th",
    difficulty: "Accessible",
    readingTime: "8-10 hours",
    themes: ["Ordinary holiness", "Devotion", "Patience", "Spiritual direction"],
    whoShouldRead: "Anyone — especially laypeople — seeking to live a holy life in the midst of daily responsibilities.",
    summary: "Francis de Sales proves that holiness is possible for everyone — married, single, rich, poor — through patient, ordinary acts of love and devotion.",
    chapterGuide: [
      "Part I: Preparation for devotion",
      "Part II: Exercises and prayers",
      "Part III: Common obstacles to devotion",
      "Part IV: Different states of life",
      "Part V: Encouragements for the devout life"
    ],
    importantPassages: [
      { text: "Be who you are and be that well", location: "Letter" },
      { text: "The great art of holiness consists in carrying patiently the little imperfections", location: "Part III" },
      { text: "Have patience with all things, but first of all with yourself", location: "Spiritual Conferences" }
    ],
    relatedSeasons: ["prayer", "patience", "humility", "daily-life"],
    relatedBooks: ["way-of-perfection", "confessions"],
    relatedSaints: ["st-francis-de-sales", "st-teresa-avila"],
    readingPlan: "Read the practical exercises alongside the chapters. Apply one exercise each week.",
    studyQuestions: [
      "How does Francis define true devotion?",
      "What obstacles does he identify to the devout life?",
      "How does he address the challenge of patience?"
    ],
    journalPrompts: [
      "What does 'the devout life' look like in your current situation?",
      "What obstacles most hinder your spiritual growth?",
      "How can you practice patience with yourself today?"
    ]
  },
  {
    id: "spiritual-exercises",
    title: "The Spiritual Exercises",
    author: "St. Ignatius of Loyola",
    authorId: "st-ignatius",
    century: "16th",
    difficulty: "Challenging",
    readingTime: "Varies (typically a 30-day retreat)",
    themes: ["Discernment", "Conversion", "Prayer", "Mission"],
    whoShouldRead: "Those making a directed retreat or seeking deeper understanding of Ignatian discernment.",
    summary: "A manual for a 30-day retreat structured around four 'weeks' that lead the retreatant from sin through the life of Christ to discernment of God's will.",
    chapterGuide: [
      "First Week: Meditation on sin, death, and God's mercy",
      "Second Week: The life of Christ and the call of the King",
      "Third Week: The Passion and death of Christ",
      "Fourth Week: The Resurrection and Contemplation to Attain Love"
    ],
    importantPassages: [
      { text: "The Principle and Foundation: God created man to love him", location: "First Week" },
      { text: "Love ought to manifest itself in deeds rather than in words", location: "Second Week" },
      { text: "It is not much knowledge that fills and satisfies the soul", location: "Third Week" }
    ],
    relatedSeasons: ["discernment", "prayer", "conversion", "vocation"],
    relatedBooks: ["introduction-devout-life"],
    relatedSaints: ["st-ignatius"],
    readingPlan: "Best experienced as a directed retreat. For private study, read one meditation per day.",
    studyQuestions: [
      "What does the Principle and Foundation reveal about human purpose?",
      "How do the two standards meditation challenge your loyalties?",
      "What is the 'Contemplation to Attain Love' teaching?"
    ],
    journalPrompts: [
      "Write a personal Principle and Foundation.",
      "What does God's love look like in your daily life?",
      "Where is God calling you to go beyond your comfort zone?"
    ]
  },
  {
    id: "story-of-a-soul",
    title: "Story of a Soul",
    author: "St. Thérèse of Lisieux",
    authorId: "st-therese",
    century: "19th",
    difficulty: "Accessible",
    readingTime: "5-7 hours",
    themes: ["Little Way", "Spiritual childhood", "Love", "Ordinary holiness"],
    whoShouldRead: "Everyone — especially those who feel holiness is beyond their reach.",
    summary: "The autobiography of St. Thérèse, who discovered that God's love is accessible to everyone through doing small things with great love — her 'Little Way.'",
    chapterGuide: [
      "Manuscript A: Childhood and entry to Carmel",
      "Manuscript B: Her religious life and encounter with grace",
      "Manuscript C: Her mission in the Church",
      "Final chapters and poems"
    ],
    importantPassages: [
      { text: "My vocation is love! In the heart of the Church, I will be love", location: "Manuscript B" },
      { text: "Miss no single opportunity of making some small sacrifice", location: "Manuscript A" },
      { text: "God would never inspire me with desires which are beyond my power", location: "Manuscript B" }
    ],
    relatedSeasons: ["humility", "love", "joy", "ordinary-holiness"],
    relatedBooks: ["interior-castle"],
    relatedSaints: ["st-therese", "st-teresa-avila"],
    readingPlan: "Read one manuscript at a time. Take breaks to journal between manuscripts.",
    studyQuestions: [
      "What is the 'Little Way' and how does Thérèse describe it?",
      "How does Thérèse understand God's mercy?",
      "What is her 'elevator' metaphor and what does it teach?"
    ],
    journalPrompts: [
      "What 'small things' can you do with greater love today?",
      "How does Thérèse's Little Way change your understanding of holiness?",
      "What is God teaching you through the ordinary moments of your life?"
    ]
  },
  {
    id: "rule-of-st-benedict",
    title: "The Rule of St. Benedict",
    author: "St. Benedict of Nursia",
    authorId: "st-benedict",
    century: "5th-6th",
    difficulty: "Accessible",
    readingTime: "4-6 hours",
    themes: ["Obedience", "Community", "Prayer", "Work", "Balance"],
    whoShouldRead: "Those seeking a balanced rule of life, or interested in monastic spirituality and its application to daily life.",
    summary: "A rule for monastic life emphasizing prayer, work, obedience, and community. Its balanced rhythm of life has guided Christians for fifteen centuries.",
    chapterGuide: [
      "Chapters 1-7: Types of monks and the abbot",
      "Chapters 8-13: The Divine Office — daily prayer schedule",
      "Chapters 14-30: Various aspects of monastic life",
      "Chapters 31-57: Rules for community life",
      "Chapters 58-73: Rules for reception, discipline, and the concluding chapter"
    ],
    importantPassages: [
      { text: "Listen carefully, my child, to the master's instructions", location: "Prologue" },
      { text: "Ora et labora — Pray and work", location: "Throughout" },
      { text: "Idleness is the enemy of the soul", location: "Ch. 48" }
    ],
    relatedSeasons: ["prayer", "silence", "obedience", "humility"],
    relatedBooks: ["introduction-devout-life"],
    relatedSaints: ["st-benedict"],
    readingPlan: "Read the Prologue and first seven chapters first. Then read one chapter per day.",
    studyQuestions: [
      "What is the relationship between obedience and freedom in Benedict's Rule?",
      "How does the balance of prayer and work apply to modern life?",
      "What is 'Lectio Divina' and how can you practice it?"
    ],
    journalPrompts: [
      "What would a personal 'rule of life' look like for you?",
      "How does obedience challenge you in your current situation?",
      "What does 'listening with the ear of your heart' mean for you?"
    ]
  },
  {
    id: "ascent-of-mount-carmel",
    title: "Ascent of Mount Carmel",
    author: "St. John of the Cross",
    authorId: "st-john-cross",
    century: "16th",
    difficulty: "Challenging",
    readingTime: "6-8 hours",
    themes: ["Detachment", "Purification", "Virtue", "Faith"],
    whoShouldRead: "Those seeking rigorous guidance on detachment and purification of the senses and spirit.",
    summary: "A systematic treatise on the purification of the soul, explaining how detachment from creatures leads to union with God.",
    chapterGuide: [
      "Book I: Purification of sense appetite through the dark night",
      "Book II: Purification of the spirit — the faculties of intellect, memory, and will",
      "Practical guidance on faith, hope, and love as the means of purification"
    ],
    importantPassages: [
      { text: "The soul that is attached to anything will not arrive at divine union", location: "Book I" },
      { text: "Faith is the sole proximate means of union with God", location: "Book II" },
      { text: "Hope is the means of receiving what faith believes", location: "Book II" }
    ],
    relatedSeasons: ["dark-night", "purification", "detachment"],
    relatedBooks: ["dark-night", "living-flame-of-love"],
    relatedSaints: ["st-john-cross"],
    readingPlan: "Read one chapter per day, preferably in the morning before work.",
    studyQuestions: [
      "What does John mean by 'nothing, nothing, nothing'?",
      "How does faith purify the intellect?",
      "What is the role of hope in spiritual growth?"
    ],
    journalPrompts: [
      "What attachments keep you from union with God?",
      "How does the call to detachment challenge you?",
      "What does 'pure faith' look like in your life?"
    ]
  },
  {
    id: "city-of-god",
    title: "City of God",
    author: "St. Augustine of Hippo",
    authorId: "st-augustine",
    century: "4th-5th",
    difficulty: "Challenging",
    readingTime: "20+ hours",
    themes: ["History", "Providence", "Two cities", "Eternal life"],
    whoShouldRead: "Those seeking a comprehensive theology of history and God's providence.",
    summary: "Written in response to the fall of Rome, Augustine presents all of history as the drama of two cities — the City of God and the City of Man — moving toward their ultimate destinies.",
    chapterGuide: [
      "Books I-V: Critique of Roman paganism",
      "Books VI-XI: The two cities and their origins",
      "Books XII-XXII: The destinies of the two cities"
    ],
    importantPassages: [
      { text: "Two loves have made two cities: self-love in contempt of God made the earthly city; love of God made the heavenly city", location: "Book XIV" },
      { text: "Our hearts are restless until they rest in you", location: "Referenced throughout" }
    ],
    relatedSeasons: ["hope", "suffering", "providence"],
    relatedBooks: ["confessions"],
    relatedSaints: ["st-augustine"],
    readingPlan: "Read selectively — Books I-V for critique of paganism, Books XIV-XV for the two cities, Books XX-XXII for the end times.",
    studyQuestions: [
      "What are the two cities and what defines them?",
      "How does Augustine understand the role of suffering in history?",
      "What is Augustine's vision of the eternal city?"
    ],
    journalPrompts: [
      "Which 'city' are you most drawn to?",
      "How does the Christian vision of history give meaning to present suffering?",
      "What is your ultimate hope?"
    ]
  },
  {
    id: "way-of-perfection",
    title: "Way of Perfection",
    author: "St. Teresa of Avila",
    authorId: "st-teresa-avila",
    century: "16th",
    difficulty: "Accessible to Moderate",
    readingTime: "5-7 hours",
    themes: ["Prayer", "Humility", "Detachment", "Lord's Prayer"],
    whoShouldRead: "Those seeking practical guidance on prayer and spiritual growth.",
    summary: "Teresa's practical guide to prayer, using the Our Father as a framework for the soul's journey to God.",
    chapterGuide: [
      "Chapters 1-6: The importance of prayer and humility",
      "Chapters 7-12: Meditation on the Our Father",
      "Chapters 13-42: Practical advice for prayer and spiritual growth"
    ],
    importantPassages: [
      { text: "Prayer is nothing else than a friendly conversation", location: "Chapter 8" },
      { text: "Humility is walking in truth", location: "Chapter 4" },
      { text: "The soul is like a garden that must be watered by prayer", location: "Chapter 11" }
    ],
    relatedSeasons: ["prayer", "humility", "detachment"],
    relatedBooks: ["interior-castle", "dark-night"],
    relatedSaints: ["st-teresa-avila", "st-francis-de-sales"],
    readingPlan: "Read one chapter per day. Practice the prayer of recollection after reading.",
    studyQuestions: [
      "How does Teresa define true prayer?",
      "What role does humility play in prayer?",
      "How does detachment free us for deeper prayer?"
    ],
    journalPrompts: [
      "What does 'friendly conversation with God' look like for you?",
      "How does humility help you in prayer?",
      "What obstacles to prayer need to be addressed?"
    ]
  }
];

window.BOOKS = BOOKS;
