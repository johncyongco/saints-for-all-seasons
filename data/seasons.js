const SEASONS = [
  {
    id: "desolation",
    name: "Spiritual Desolation",
    heroImage: "assets/images/desolation.jpg",
    definition: "Spiritual desolation is a period of inner dryness, emptiness, and spiritual darkness in which God seems absent, prayers feel futile, and the soul experiences deep distress and discouragement.",
    commonMisconceptions: [
      "That desolation means God has abandoned you",
      "That you have done something gravely wrong",
      "That your faith was never real",
      "That you must feel God's presence to be close to Him"
    ],
    symptoms: [
      "Loss of prayerful desire",
      "Spiritual dryness and emptiness",
      "Doubt about God's love or existence",
      "Temptation to abandon the spiritual life",
      "Sense of meaninglessness",
      "Restlessness and inner turmoil"
    ],
    scripture: [
      { text: "My God, my God, why have you forsaken me?", reference: "Psalm 22:1; Matthew 27:46" },
      { text: "Even though I walk through the valley of the shadow of death, I will fear no evil, for you are with me.", reference: "Psalm 23:4" },
      { text: "We are afflicted in every way, but not crushed; perplexed, but not driven to despair.", reference: "2 Corinthians 4:8" }
    ],
    catechism: [
      { text: "The humble are not surprised by their distress; it leads them to trust more, to hold fast in constancy.", reference: "CCC 2733" },
      { text: "Discouragement during periods of dryness; sadness that, because we have 'great possessions,' we have not given all to the Lord; disappointment over not being heard according to our own will.", reference: "CCC 2728" }
    ],
    teachings: [
      {
        title: "Ignatian Rules for Desolation",
        content: "St. Ignatius of Loyola taught that in desolation we should never change our prayer habits, but rather intensify them. We should resist discouragement and remember that desolation is temporary.",
        source: "Spiritual Exercises, Rules for Discernment"
      },
      {
        title: "The Dark Night as Purification",
        content: "St. John of the Cross understood desolation not as punishment but as God's purifying work, stripping away attachments that prevent union with Him.",
        source: "Dark Night of the Soul"
      }
    ],
    prayers: [
      "The Jesus Prayer: Lord Jesus Christ, Son of God, have mercy on me",
      "Psalm 22",
      "Ave Maria"
    ],
    recommendedBooks: ["dark-night", "spiritual-exercises", "interior-castle"],
    journalPrompts: [
      "What is God stripping away from you in this season?",
      "Where do you notice the smallest presence of God amid the darkness?",
      "What would it mean to trust God in the absence of feeling?"
    ],
    ruleOfLife: "Maintain your regular prayer schedule. Do not make major decisions during desolation. Seek spiritual direction. Practice gratitude for small things.",
    relatedSeasons: ["dark-night", "dry-prayer", "trust", "despair"],
    relatedVirtues: ["hope", "faith", "patience"],
    relatedTemptations: ["despair", "discouragement"],
    relatedLifeSituations: ["grief", "anxiety", "failure"]
  },
  {
    id: "consolation",
    name: "Spiritual Consolation",
    heroImage: "assets/images/consolation.jpg",
    definition: "Spiritual consolation is an interior movement of the soul toward God, marked by peace, joy, clarity, and a sense of God's nearness and love.",
    commonMisconceptions: [
      "That consolation is the goal of the spiritual life",
      "That you are holier when you feel close to God",
      "That consolation will last forever",
      "That everyone experiences it the same way"
    ],
    symptoms: [
      "Deep peace and joy in prayer",
      "Sense of God's nearness",
      "Clarity about spiritual things",
      "Desire to praise and thank God",
      "Tears of joy or gratitude",
      "Renewed zeal for the spiritual life"
    ],
    scripture: [
      { text: "The Lord is my shepherd; I shall not want. He makes me lie down in green pastures.", reference: "Psalm 23:1-2" },
      { text: "You have turned my mourning into dancing; you have loosed my sackcloth and clothed me with gladness.", reference: "Psalm 30:11" },
      { text: "The fruit of the Spirit is love, joy, peace, patience, kindness, goodness, faithfulness.", reference: "Galatians 5:22" }
    ],
    catechism: [
      { text: "God reveals himself to man by giving him the grace to see and love him.", reference: "CCC 50" },
      { text: "The Holy Spirit teaches us to pray and intercedes for us with inexpressible groanings.", reference: "CCC 2734" }
    ],
    teachings: [
      {
        title: "Receiving Consolation with Humility",
        content: "St. Ignatius taught that consolation is a gift from God, not something we earn. We should receive it gratefully but not cling to it.",
        source: "Spiritual Exercises, Rules for Discernment"
      }
    ],
    prayers: ["Te Deum", "Psalm 23", "Magnificat"],
    recommendedBooks: ["interior-castle", "confessions"],
    journalPrompts: [
      "What is God communicating to you in this season of consolation?",
      "How can you share this peace with others?",
      "How can you prepare your heart for the next season of desolation?"
    ],
    ruleOfLife: "Receive consolation with gratitude. Record it for future remembrance. Do not depend on it. Use it to deepen your relationship with God.",
    relatedSeasons: ["prayer", "contemplation", "union-with-god", "joy"],
    relatedVirtues: ["joy", "gratitude", "love"],
    relatedTemptations: ["vanity", "attachment"],
    relatedLifeSituations: []
  },
  {
    id: "prayer",
    name: "Prayer",
    heroImage: "assets/images/prayer.jpg",
    definition: "Prayer is the lifting of the heart and mind to God, the living relationship of the child with the Father, sustained by the Holy Spirit.",
    commonMisconceptions: [
      "That prayer must always be words",
      "That good prayer requires long periods",
      "That prayer is only for religious",
      "That dry prayer is wasted prayer"
    ],
    symptoms: [
      "Desire for silence and solitude",
      "Growing awareness of God's presence",
      "Increased sensitivity to the needs of others",
      "Desire to read Scripture",
      "Growing sense of peace",
      "Conviction of sin and need for mercy"
    ],
    scripture: [
      { text: "Pray without ceasing.", reference: "1 Thessalonians 5:17" },
      { text: "Be still, and know that I am God.", reference: "Psalm 46:10" },
      { text: "When you pray, go into your room and shut the door and pray to your Father who is in secret.", reference: "Matthew 6:6" }
    ],
    catechism: [
      { text: "Prayer is the life of the new heart. It ought to animate us at every moment.", reference: "CCC 2697" },
      { text: "In the age of the Church, Christian prayer struggles against the distraction of external circumstances.", reference: "CCC 2729" }
    ],
    teachings: [
      { title: "The Our Father", content: "Jesus taught us the perfect prayer, which contains all the petitions of the human heart.", source: "Matthew 6:9-13" },
      { title: "Lectio Divina", content: "The ancient monastic practice of reading Scripture slowly and contemplatively, allowing God to speak through His Word.", source: "Benedictine tradition" }
    ],
    prayers: ["Our Father", "The Jesus Prayer", "Lectio Divina", "The Rosary", "Divine Mercy Chaplet"],
    recommendedBooks: ["way-of-perfection", "interior-castle", "introduction-devout-life", "rule-of-st-benedict"],
    journalPrompts: [
      "What type of prayer draws you closest to God?",
      "What distracts you most in prayer?",
      "How has your prayer life changed over the years?"
    ],
    ruleOfLife: "Set aside a specific time each day for prayer. Begin with small periods and gradually increase. Be faithful even when prayer feels dry.",
    relatedSeasons: ["contemplation", "dark-night", "consolation", "desolation", "silence"],
    relatedVirtues: ["humility", "faith", "patience", "love"],
    relatedTemptations: ["sloth", "scrupulosity"],
    relatedLifeSituations: ["work", "discernment"]
  },
  {
    id: "humility",
    name: "Humility",
    heroImage: "assets/images/humility.jpg",
    definition: "Humility is the foundational virtue by which we see ourselves rightly before God — as creatures utterly dependent on His grace, with no grounds for self-exaltation.",
    commonMisconceptions: [
      "That humility means thinking less of yourself",
      "That it is weakness or passivity",
      "That humble people cannot recognize their gifts",
      "That humility is the same as low self-esteem"
    ],
    symptoms: [
      "Growing awareness of dependence on God",
      "Decreased need for recognition",
      "Freedom from comparing yourself to others",
      "Readiness to serve without being noticed",
      "Honest acknowledgment of faults",
      "Gratitude for others' gifts"
    ],
    scripture: [
      { text: "God opposes the proud but gives grace to the humble.", reference: "James 4:6" },
      { text: "Humble yourselves before the Lord, and he will exalt you.", reference: "James 4:10" },
      { text: "The greatest among you shall be your servant.", reference: "Matthew 23:11" }
    ],
    catechism: [
      { text: "Humility is the foundation of prayer. Only when we humbly acknowledge that we do not have the words of God, can we pray to Him.", reference: "CCC 2559" }
    ],
    teachings: [
      { title: "The Humility of Mary", content: "The Magnificat reveals Mary's complete self-abnegation before God: 'He has regarded the low estate of his handmaiden.'", source: "Luke 1:46-55" },
      { title: "The Humility of Christ", content: "Christ 'emptied himself, taking the form of a servant' — humility is modeled perfectly in Him.", source: "Philippians 2:5-8" }
    ],
    prayers: ["The Litany of Humility", "Magnificat", "Anima Christi"],
    recommendedBooks: ["story-of-a-soul", "introduction-devout-life", "way-of-perfection"],
    journalPrompts: [
      "Where do you notice pride in your spiritual life?",
      "What does it mean to think of yourself with sober judgment?",
      "How does the humility of Christ change your understanding of greatness?"
    ],
    ruleOfLife: "Practice small acts of hidden charity daily. Accept correction gracefully. Resist the urge to defend yourself. Pray for the virtue of humility each morning.",
    relatedSeasons: ["obedience", "poverty", "charity"],
    relatedVirtues: ["obedience", "patience", "poverty", "charity"],
    relatedTemptations: ["pride", "vanity"],
    relatedLifeSituations: ["leadership", "work"]
  },
  {
    id: "dark-night",
    name: "The Dark Night",
    heroImage: "assets/images/dark-night.jpg",
    definition: "The Dark Night of the Soul is a profound spiritual purification described by St. John of the Cross, in which God systematically strips away all lesser consolations to prepare the soul for divine union.",
    commonMisconceptions: [
      "That the dark night is depression",
      "That it is a punishment for sin",
      "That it only happens once",
      "That only mystics experience it"
    ],
    symptoms: [
      "Complete loss of spiritual consolation",
      "Inability to pray with any satisfaction",
      "Deep sense of God's absence",
      "Loss of interest in spiritual things",
      "Profound interior suffering",
      "Paradoxically, deeper purification of intention"
    ],
    scripture: [
      { text: "My God, my God, why have you forsaken me?", reference: "Psalm 22:1; Matthew 27:46" },
      { text: "If anyone would come after me, let him deny himself and take up his cross and follow me.", reference: "Matthew 16:24" },
      { text: "I have been crucified with Christ. It is no longer I who live, but Christ who lives in me.", reference: "Galatians 2:20" }
    ],
    catechism: [
      { text: "The way of perfection passes by way of the Cross. There is no holiness without renunciation and spiritual battle.", reference: "CCC 2015" }
    ],
    teachings: [
      { title: "Night of the Senses", content: "The first stage where God withdraws sensible consolation, teaching the soul to persevere in faith without emotional reward.", source: "Dark Night of the Soul, Book I" },
      { title: "Night of the Spirit", content: "The deeper purgation where even the soul's spiritual self-image is purified, preparing it for transforming union.", source: "Dark Night of the Soul, Book II" }
    ],
    prayers: ["Psalm 22", "The Jesus Prayer", "Psalm 42", "Prayer of Surrender"],
    recommendedBooks: ["dark-night", "ascent-of-mount-carmel", "living-flame-of-love"],
    journalPrompts: [
      "What is being purified in you during this dark night?",
      "Can you trust that God is working even when you cannot feel Him?",
      "How does the Cross of Christ give meaning to your suffering?"
    ],
    ruleOfLife: "Do not abandon prayer. Do not make hasty decisions. Seek spiritual direction. Trust that God is working. Offer your suffering for others.",
    relatedSeasons: ["desolation", "purification", "dry-prayer", "union-with-god"],
    relatedVirtues: ["faith", "hope", "patience", "perseverance"],
    relatedTemptations: ["despair", "discouragement"],
    relatedLifeSituations: ["grief", "suffering", "anxiety"]
  },
  {
    id: "discernment",
    name: "Discernment",
    heroImage: "assets/images/discernment.jpg",
    definition: "Discernment is the process by which we learn to recognize and follow God's will, distinguishing His voice from our own desires, fears, and the influences of the evil spirit.",
    commonMisconceptions: [
      "That discernment is purely intellectual",
      "That God's will is always clear immediately",
      "That discernment is a one-time event",
      "That we can discern alone without community or direction"
    ],
    symptoms: [
      "Growing interior freedom",
      "Increased sensitivity to the movements of the Spirit",
      "Clarity about God's desires for your life",
      "Peace after making decisions aligned with God's will",
      "Willingness to surrender your own plans",
      "Ability to recognize consolation and desolation"
    ],
    scripture: [
      { text: "Do not be conformed to this world, but be transformed by the renewal of your mind, that by testing you may discern what is the will of God.", reference: "Romans 12:2" },
      { text: "The Lord will give you understanding in everything.", reference: "2 Timothy 2:7" },
      { text: "Trust in the Lord with all your heart, and do not lean on your own understanding. In all your ways acknowledge him, and he will make straight your paths.", reference: "Proverbs 3:5-6" }
    ],
    catechism: [
      { text: "In the moral conscience, the human person perceives the requirements of the moral law.", reference: "CCC 1776" },
      { text: "In the formation of their conscience, the Word of God is the light for our path.", reference: "CCC 104" }
    ],
    teachings: [
      { title: "Ignatian Discernment", content: "St. Ignatius taught that authentic discernment involves attending to the movements of consolation and desolation, seeking clarity through prayer and obedience.", source: "Spiritual Exercises" },
      { title: "Discernment of Spirits", content: "The ability to recognize whether interior movements come from God, the evil spirit, or our own natural inclinations.", source: "Spiritual Exercises, Rules for Discernment" }
    ],
    prayers: ["Anima Christi", "Prayer of St. Ignatius", "Veni Creator Spiritus"],
    recommendedBooks: ["spiritual-exercises", "introduction-devout-life"],
    journalPrompts: [
      "What decision are you currently discerning?",
      "Where do you notice consolation and desolation in relation to this decision?",
      "What would complete surrender to God's will look like for you?"
    ],
    ruleOfLife: "Begin with small discernments. Keep a journal. Seek spiritual direction. Never discern alone. Pray for the gifts of the Holy Spirit.",
    relatedSeasons: ["prayer", "vocation", "dark-night", "trust"],
    relatedVirtues: ["prudence", "obedience", "faith", "humility"],
    relatedTemptations: ["fear", "attachment"],
    relatedLifeSituations: ["vocation", "work", "marriage"]
  },
  {
    id: "purity",
    name: "Purity",
    heroImage: "assets/images/purity.jpg",
    definition: "Purity of heart is the grace of seeing God clearly, achieved through the purification of disordered desires and the alignment of the whole person with God's will.",
    commonMisconceptions: [
      "That purity is only about sexuality",
      "That it is primarily about rules",
      "That it is impossible to achieve",
      "That it makes life joyless"
    ],
    symptoms: [
      "Freedom from disordered desires",
      "Ability to see others as God sees them",
      "Interior peace regarding temptations",
      "Growing love for God above all things",
      "Clarity of vision in prayer",
      "Freedom from anxiety about others' opinions"
    ],
    scripture: [
      { text: "Blessed are the pure in heart, for they shall see God.", reference: "Matthew 5:8" },
      { text: "Create in me a clean heart, O God, and renew a right spirit within me.", reference: "Psalm 51:10" },
      { text: "Keep your heart with all vigilance, for from it flow the springs of life.", reference: "Proverbs 4:23" }
    ],
    catechism: [
      { text: "The Beatitudes reveal the goal of human existence, our ultimate end and the happiness for which we were created.", reference: "CCC 1719" },
      { text: "Purity of heart is the prerequisite for seeing God.", reference: "CCC 2519" }
    ],
    teachings: [
      { title: "Augustine on Purity", content: "Augustine understood purity as the singleness of heart that loves God above all things, freed from the dividedness of concupiscence.", source: "Confessions" },
      { title: "Thérèse and Purity", content: "St. Thérèse of Lisieux understood purity as the complete possession of love — purity is ultimately about the heart's orientation toward God.", source: "Story of a Soul" }
    ],
    prayers: ["Prayer for Purity", "Litany of Chastity", "Psalm 51"],
    recommendedBooks: ["story-of-a-soul", "confessions", "interior-castle"],
    journalPrompts: [
      "What disordered desires keep you from seeing God clearly?",
      "How does purity of heart relate to freedom and joy?",
      "What small steps can you take toward greater interior freedom?"
    ],
    ruleOfLife: "Guard your senses. Practice moderation in all things. Flee occasions of sin. Pray daily for purity. Seek the sacrament of Reconciliation regularly.",
    relatedSeasons: ["virtues", "humility", "charity"],
    relatedVirtues: ["chastity", "temperance", "humility", "charity"],
    relatedTemptations: ["lust", "vanity", "attachment"],
    relatedLifeSituations: ["youth", "marriage"]
  },
  {
    id: "vocation",
    name: "Vocation",
    heroImage: "assets/images/vocation.jpg",
    definition: "Vocation is God's unique call to each person to holiness and mission, expressed through the particular state of life, gifts, and circumstances He has chosen for them.",
    commonMisconceptions: [
      "That vocation means only priesthood or religious life",
      "That you must discover your vocation before you can be happy",
      "That God's call is always dramatic and clear",
      "That vocation is a one-time decision"
    ],
    symptoms: [
      "Growing desire to serve God in a particular way",
      "Peace and consolation when considering a particular path",
      "Confirmation through the counsel of wise advisors",
      "A sense that your gifts align with this calling",
      "Willingness to sacrifice for this path",
      "Interior freedom in making the decision"
    ],
    scripture: [
      { text: "Before I formed you in the womb I knew you, and before you were born I consecrated you.", reference: "Jeremiah 1:5" },
      { text: "For we are his workmanship, created in Christ Jesus for good works, which God prepared beforehand, that we should walk in them.", reference: "Ephesians 2:10" },
      { text: "If anyone serves me, he must follow me; and where I am, there will my servant be also.", reference: "John 12:26" }
    ],
    catechism: [
      { text: "Everyone has a vocation. It is the call to follow Christ and to live out one's baptismal promises.", reference: "CCC 872" }
    ],
    teachings: [
      { title: "The Universal Call to Holiness", content: "Vatican II taught that all Christians, whatever their state of life, are called to the fullness of holiness.", source: "Lumen Gentium, Ch. 5" }
    ],
    prayers: ["Prayer for Vocations", "Anima Christi", "Veni Creator Spiritus"],
    recommendedBooks: ["spiritual-exercises", "introduction-devout-life"],
    journalPrompts: [
      "What stirs your heart most deeply when you pray?",
      "Where do your gifts, passions, and the needs of the world intersect?",
      "What is God asking of you right now, today?"
    ],
    ruleOfLife: "Pray daily for clarity about your vocation. Seek wise counsel. Be willing to surrender your plans. Trust that God will guide you.",
    relatedSeasons: ["discernment", "marriage", "prayer"],
    relatedVirtues: ["obedience", "faith", "hope", "love"],
    relatedTemptations: ["fear", "attachment", "discouragement"],
    relatedLifeSituations: ["marriage", "youth", "work", "parenthood"]
  },
  {
    id: "suffering",
    name: "Suffering",
    heroImage: "assets/images/suffering.jpg",
    definition: "Christian suffering is the participation in the Cross of Christ, through which redemptive love is offered to the world and the soul is purified.",
    commonMisconceptions: [
      "That suffering is always God's punishment",
      "That we should seek suffering for its own sake",
      "That suffering is meaningless",
      "That Christians should never struggle with pain"
    ],
    symptoms: [
      "Physical or emotional pain",
      "Sense of isolation",
      "Questioning of God's plan",
      "Temptation to despair",
      "Opportunity for deeper union with Christ",
      "Growth in compassion and empathy"
    ],
    scripture: [
      { text: "Now I rejoice in my sufferings for your sake, and in my flesh I am filling up what is lacking in Christ's afflictions.", reference: "Colossians 1:24" },
      { text: "For it has been granted to you that for the sake of Christ you should not only believe in him but also suffer for his sake.", reference: "Philippians 1:29" },
      { text: "And we know that for those who love God all things work together for good.", reference: "Romans 8:28" }
    ],
    catechism: [
      { text: "Redemptive suffering means that suffering can unite us to Christ and contribute to the salvation of others.", reference: "CCC 1521" },
      { text: "Following Christ, the Way, the Truth, and the Life, the whole Christian community participates in the suffering of Christ.", reference: "CCC 1505" }
    ],
    teachings: [
      { title: "Suffering with Christ", content: "St. Paul teaches that our sufferings, when united with Christ's, become redemptive — they participate in the salvation of the world.", source: "Colossians 1:24" },
      { title: "The Theology of the Body", content: "St. John Paul II taught that suffering, while not good in itself, becomes a vehicle of grace when offered in union with Christ.", source: "Salvifici Doloris" }
    ],
    prayers: ["Prayer of Offering", "Stations of the Cross", "Anima Christi"],
    recommendedBooks: ["science-of-the-cross", "story-of-a-soul", "confessions"],
    journalPrompts: [
      "How has suffering shaped your relationship with God?",
      "What does it mean to unite your suffering with Christ's?",
      "Where do you see God's grace present in your pain?"
    ],
    ruleOfLife: "Offer your daily sufferings to God each morning. Pray the Stations of the Cross. Seek medical help when needed. Do not suffer alone — share your burdens.",
    relatedSeasons: ["dark-night", "desolation", "humility", "cross"],
    relatedVirtues: ["patience", "perseverance", "hope", "love"],
    relatedTemptations: ["despair", "discouragement"],
    relatedLifeSituations: ["illness", "grief", "persecution", "failure"]
  },
  {
    id: "joy",
    name: "Joy",
    heroImage: "assets/images/joy.jpg",
    definition: "Christian joy is not mere happiness or pleasure, but a deep, abiding gladness rooted in the knowledge of God's love and the hope of eternal life.",
    commonMisconceptions: [
      "That joy is the same as happiness",
      "That joy requires favorable circumstances",
      "That Christians must always appear cheerful",
      "That joy is self-generated"
    ],
    symptoms: [
      "Deep peace despite difficulties",
      "Desire to praise God",
      "Generosity and self-forgetfulness",
      "Freedom from anxiety",
      "Ability to find goodness in all things",
      "Infectious hope for others"
    ],
    scripture: [
      { text: "Rejoice in the Lord always; again I will say, Rejoice.", reference: "Philippians 4:4" },
      { text: "The joy of the Lord is your strength.", reference: "Nehemiah 8:10" },
      { text: "These things I have spoken to you, that my joy may be in you, and that your joy may be full.", reference: "John 15:11" }
    ],
    catechism: [
      { text: "The fruits of the Spirit are perfections that the Holy Spirit forms in us as the first fruits of eternal glory.", reference: "CCC 1832" }
    ],
    teachings: [
      { title: "The Joy of the Gospel", content: "Pope Francis teaches that joy is the hallmark of the Christian life — a joy that comes from encountering Christ.", source: "Evangelii Gaudium" },
      { title: "Teresa's Joy", content: "St. Teresa of Avila insisted that a sad Christian is not a good Christian — joy is essential to authentic spirituality.", source: "Way of Perfection" }
    ],
    prayers: ["Magnificat", "Te Deum", "Psalms of Praise"],
    recommendedBooks: ["story-of-a-soul", "interior-castle", "evangelii-gaudium"],
    journalPrompts: [
      "When do you experience the deepest joy?",
      "How can joy coexist with suffering?",
      "What robs you of joy, and how can you guard against it?"
    ],
    ruleOfLife: "Begin each day with gratitude. Praise God in all circumstances. Share your joy with others. Guard against negativity and complaint.",
    relatedSeasons: ["consolation", "love", "praise"],
    relatedVirtues: ["charity", "hope", "gratitude", "gentleness"],
    relatedTemptations: ["sloth", "despair"],
    relatedLifeSituations: ["friendship", "marriage", "parenthood"]
  }
];

window.SEASONS = SEASONS;
