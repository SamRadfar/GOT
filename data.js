/* Game of Thrones Family Tree — Data */
'use strict';

// ========== 1. CHARACTER DATABASE ==========
const characters = {
  eddard:{name:"Eddard 'Ned' Stark",title:"Lord of Winterfell, Warden of the North, Hand of the King",house:"Stark",status:"Deceased (beheaded S1)",actor:"Sean Bean",bio:"Honorable lord of the North and close friend of King Robert. Discovered the truth about Cersei's children and was executed for treason by Joffrey. His death sparked the War of the Five Kings.",relations:"Wife: Catelyn Tully | Children: Robb, Sansa, Arya, Bran, Rickon | Raised: Jon Snow | Siblings: Benjen, Lyanna (deceased), Brandon (deceased)",color:"var(--stark)"},
  catelyn:{name:"Catelyn Stark",title:"Lady of Winterfell, née Tully",house:"Stark / Tully",status:"Deceased (Red Wedding S3)",actor:"Michelle Fairley",bio:"Devoted mother who fiercely protected her children. Originally from House Tully of Riverrun. Killed at the Red Wedding alongside her son Robb.",relations:"Husband: Ned Stark | Children: Robb, Sansa, Arya, Bran, Rickon | Father: Hoster Tully | Siblings: Lysa Arryn, Edmure Tully",color:"var(--stark)"},
  robb:{name:"Robb Stark",title:"King in the North, The Young Wolf",house:"Stark",status:"Deceased (Red Wedding S3)",actor:"Richard Madden",bio:"Eldest Stark son who rallied the North after Ned's execution. Won every battle but lost the war by breaking his marriage pact with the Freys. Murdered at the Red Wedding.",relations:"Parents: Ned & Catelyn | Wife: Talisa | Siblings: Sansa, Arya, Bran, Rickon",color:"var(--stark)"},
  sansa:{name:"Sansa Stark",title:"Queen in the North, Lady of Winterfell",house:"Stark",status:"Alive",actor:"Sophie Turner",bio:"Began as a naive girl dreaming of princes. Endured abuse from Joffrey, manipulation by Littlefinger, and torment from Ramsay Bolton. Emerged as a shrewd political leader and was crowned Queen in the North.",relations:"Parents: Ned & Catelyn | Marriages: Tyrion Lannister (annulled), Ramsay Bolton | Siblings: Robb, Arya, Bran, Rickon",color:"var(--stark)"},
  arya:{name:"Arya Stark",title:"No One / Faceless Assassin",house:"Stark",status:"Alive",actor:"Maisie Williams",bio:"Tomboyish Stark daughter who became a deadly assassin. Trained with the Faceless Men in Braavos. Killed the Night King and avenged the Red Wedding by killing House Frey. Set sail to explore west of Westeros.",relations:"Parents: Ned & Catelyn | Mentor: Syrio Forel, Jaqen H'ghar, The Hound | Siblings: Robb, Sansa, Bran, Rickon",color:"var(--stark)"},
  bran:{name:"Bran Stark",title:"The Three-Eyed Raven, King of the Six Kingdoms",house:"Stark",status:"Alive",actor:"Isaac Hempstead Wright",bio:"Pushed from a tower by Jaime Lannister in S1, losing his ability to walk. Developed greensight and became the Three-Eyed Raven — able to see the past, present, and future. Crowned King of the Six Kingdoms.",relations:"Parents: Ned & Catelyn | Companions: Hodor, Meera Reed, Jojen Reed | Siblings: Robb, Sansa, Arya, Rickon",color:"var(--stark)"},
  rickon:{name:"Rickon Stark",title:"Youngest Stark",house:"Stark",status:"Deceased (killed by Ramsay S6)",actor:"Art Parkinson",bio:"Youngest Stark child. Separated from his family early. Captured by Ramsay Bolton and killed with an arrow during the Battle of the Bastards.",relations:"Parents: Ned & Catelyn | Siblings: Robb, Sansa, Arya, Bran",color:"var(--stark)"},
  jon:{name:"Jon Snow / Aegon Targaryen",title:"King in the North, Lord Commander of the Night's Watch, Rightful Heir to the Iron Throne",house:"Stark / Targaryen",status:"Alive",actor:"Kit Harington",bio:"Believed to be Ned's bastard, actually the son of Rhaegar Targaryen and Lyanna Stark — making him the true heir to the Iron Throne. Joined the Night's Watch, became Lord Commander, was killed and resurrected. Led the fight against the White Walkers. Killed Daenerys to stop her tyranny. Exiled beyond the Wall.",relations:"Birth Parents: Rhaegar Targaryen & Lyanna Stark | Raised by: Ned Stark | Aunt: Daenerys Targaryen | Stark siblings (cousins): Robb, Sansa, Arya, Bran, Rickon",color:"linear-gradient(135deg,var(--stark),var(--targaryen))"},
  benjen:{name:"Benjen Stark",title:"First Ranger of the Night's Watch",house:"Stark",status:"Deceased",actor:"Joseph Mawle",bio:"Ned's younger brother who joined the Night's Watch. Went missing beyond the Wall and was saved by the Children of the Forest. Sacrificed himself to save Jon Snow from wights.",relations:"Brothers: Ned, Brandon (deceased) | Sister: Lyanna (deceased) | Nephew: Jon Snow",color:"var(--stark)"},
  tywin:{name:"Tywin Lannister",title:"Lord of Casterly Rock, Warden of the West, Hand of the King",house:"Lannister",status:"Deceased (killed by Tyrion S4)",actor:"Charles Dance",bio:"Ruthless patriarch and most powerful man in Westeros. Orchestrated the Red Wedding. A brilliant strategist who ruled through fear. Killed by his own son Tyrion while on the privy.",relations:"Children: Cersei, Jaime (twins), Tyrion | Brother: Kevan | Grandchildren: Joffrey, Myrcella, Tommen",color:"var(--lannister)"},
  cersei:{name:"Cersei Lannister",title:"Queen of the Seven Kingdoms, Queen Regent, Queen Mother",house:"Lannister / Baratheon",status:"Deceased (crushed S8)",actor:"Lena Headey",bio:"Power-hungry queen who loved only her children and her twin brother Jaime. Married Robert Baratheon but all three children were actually Jaime's. Blew up the Great Sept with wildfire. Died when the Red Keep collapsed.",relations:"Twin/Lover: Jaime | Brother: Tyrion | Husband: Robert Baratheon | Children: Joffrey, Myrcella, Tommen (all by Jaime) | Father: Tywin",color:"var(--lannister)"},
  jaime:{name:"Jaime Lannister",title:"The Kingslayer, Lord Commander of the Kingsguard",house:"Lannister",status:"Deceased (crushed S8)",actor:"Nikolaj Coster-Waldau",bio:"Brilliant swordsman known as 'Kingslayer' for killing the Mad King Aerys. Had an incestuous relationship with Cersei. Lost his sword hand, which began his redemption arc. Knighted Brienne of Tarth. Died alongside Cersei.",relations:"Twin/Lover: Cersei | Brother: Tyrion | Children (secret): Joffrey, Myrcella, Tommen | Father: Tywin",color:"var(--lannister)"},
  tyrion:{name:"Tyrion Lannister",title:"The Imp, Hand of the King/Queen",house:"Lannister",status:"Alive",actor:"Peter Dinklage",bio:"Brilliant, witty dwarf despised by his father and sister. Served as Hand to Joffrey and later Daenerys. Killed his father Tywin. Ultimately became Hand of the King to Bran Stark.",relations:"Father: Tywin | Siblings: Cersei, Jaime | Ex-wife: Sansa Stark | Served: Daenerys Targaryen, Bran Stark",color:"var(--lannister)"},
  joffrey:{name:"Joffrey Baratheon",title:"King of the Seven Kingdoms",house:"Baratheon (officially) / Lannister (biologically)",status:"Deceased (poisoned S4)",actor:"Jack Gleeson",bio:"Cruel, cowardly king. Officially Robert's son but actually born of Cersei and Jaime's incest. Ordered Ned Stark's execution. Poisoned at his own wedding (the Purple Wedding).",relations:"Mother: Cersei | Biological Father: Jaime | Official Father: Robert | Siblings: Myrcella, Tommen | Brief Wife: Margaery Tyrell",color:"var(--lannister)"},
  myrcella:{name:"Myrcella Baratheon",title:"Princess",house:"Baratheon / Lannister",status:"Deceased (poisoned S5)",actor:"Nell Tiger Free",bio:"Kind and gentle princess sent to Dorne as part of a political alliance. Fell in love with Trystane Martell. Poisoned by Ellaria Sand as revenge for Oberyn's death.",relations:"Mother: Cersei | Biological Father: Jaime | Betrothed: Trystane Martell",color:"var(--lannister)"},
  tommen:{name:"Tommen Baratheon",title:"King of the Seven Kingdoms",house:"Baratheon / Lannister",status:"Deceased (suicide S6)",actor:"Dean-Charles Chapman",bio:"Good-natured but weak-willed young king. Married Margaery Tyrell. After Cersei destroyed the Sept (killing Margaery), he jumped from a window to his death.",relations:"Mother: Cersei | Biological Father: Jaime | Wife: Margaery Tyrell | Siblings: Joffrey, Myrcella",color:"var(--lannister)"},
  aerys:{name:"Aerys II Targaryen",title:"The Mad King",house:"Targaryen",status:"Deceased (killed by Jaime)",actor:"David Rintoul",bio:"Last Targaryen king. Became increasingly insane, burning people alive with wildfire. Planned to burn all of King's Landing. Killed by Jaime Lannister during Robert's Rebellion.",relations:"Wife/Sister: Rhaella | Children: Rhaegar, Viserys, Daenerys",color:"var(--targaryen)"},
  rhaegar:{name:"Rhaegar Targaryen",title:"Crown Prince, The Last Dragon",house:"Targaryen",status:"Deceased (killed by Robert)",actor:"Wilf Scolding",bio:"Beloved crown prince known for his skill and melancholy. Secretly married Lyanna Stark, triggering Robert's Rebellion. Their son is Jon Snow (Aegon Targaryen). Killed by Robert Baratheon at the Trident.",relations:"Father: Aerys II | First Wife: Elia Martell | Second Wife: Lyanna Stark | Children: Rhaenys, Aegon (by Elia), Jon/Aegon (by Lyanna) | Siblings: Viserys, Daenerys",color:"var(--targaryen)"},
  viserys:{name:"Viserys Targaryen",title:"The Beggar King",house:"Targaryen",status:"Deceased (molten gold S1)",actor:"Harry Lloyd",bio:"Daenerys' older brother. Cruel and entitled, he sold Dany to Khal Drogo in exchange for an army. Drogo killed him by pouring molten gold on his head — 'a crown for a king.'",relations:"Parents: Aerys II & Rhaella | Sister: Daenerys | Brother: Rhaegar (deceased)",color:"var(--targaryen)"},
  daenerys:{name:"Daenerys Targaryen",title:"Mother of Dragons, Breaker of Chains, Khaleesi, Queen of Meereen",house:"Targaryen",status:"Deceased (killed by Jon S8)",actor:"Emilia Clarke",bio:"Last known Targaryen (besides Jon). Rose from exiled princess to conqueror with three dragons. Freed thousands of slaves in Essos. Went mad and burned King's Landing. Killed by Jon Snow.",relations:"Parents: Aerys II & Rhaella | Brothers: Rhaegar, Viserys | Husband: Khal Drogo | Nephew/Lover: Jon Snow | Dragons: Drogon, Rhaegal, Viserion | Advisors: Tyrion, Jorah, Missandei, Grey Worm",color:"var(--targaryen)"},
  robert:{name:"Robert Baratheon",title:"King of the Seven Kingdoms",house:"Baratheon",status:"Deceased (boar hunting S1)",actor:"Mark Addy",bio:"Led the rebellion that overthrew the Targaryens, driven by rage after Rhaegar 'took' Lyanna Stark. Became a poor king — fat, drunk, and disinterested. Killed by a boar while hunting (Cersei ensured he was very drunk).",relations:"Wife: Cersei Lannister | Brothers: Stannis, Renly | Bastard: Gendry | Best Friend: Ned Stark",color:"var(--baratheon)"},
  stannis:{name:"Stannis Baratheon",title:"Lord of Dragonstone, Self-proclaimed King",house:"Baratheon",status:"Deceased (executed by Brienne S5)",actor:"Stephen Dillane",bio:"Robert's rigid, duty-bound brother. Fell under the influence of the Red Priestess Melisandre. Sacrificed his own daughter Shireen to the Lord of Light. Defeated and killed by Brienne of Tarth.",relations:"Wife: Selyse | Daughter: Shireen | Brothers: Robert, Renly | Advisor: Davos Seaworth, Melisandre",color:"var(--baratheon)"},
  renly:{name:"Renly Baratheon",title:"Lord of Storm's End",house:"Baratheon",status:"Deceased (shadow assassin S2)",actor:"Gethin Anthony",bio:"Charming youngest Baratheon brother. Declared himself king with Tyrell support. Secretly in a relationship with Loras Tyrell. Killed by a shadow creature birthed by Melisandre.",relations:"Brothers: Robert, Stannis | Lover: Loras Tyrell | Wife (political): Margaery Tyrell",color:"var(--baratheon)"},
  gendry:{name:"Gendry Baratheon",title:"Lord of Storm's End (legitimized)",house:"Baratheon",status:"Alive",actor:"Joe Dempsie",bio:"Robert's unacknowledged bastard son. A blacksmith's apprentice who befriended Arya Stark. Legitimized by Daenerys as Lord of Storm's End.",relations:"Father: Robert Baratheon | Close to: Arya Stark",color:"var(--baratheon)"},
  balon:{name:"Balon Greyjoy",title:"Lord of the Iron Islands",house:"Greyjoy",status:"Deceased (pushed by Euron S6)",actor:"Patrick Malahide",bio:"Stubborn lord who twice rebelled against the Iron Throne. Lost his first rebellion and Theon was taken as a hostage. Pushed off a bridge by his brother Euron.",relations:"Children: Yara, Theon | Brother: Euron",color:"var(--greyjoy)"},
  yara:{name:"Yara Greyjoy",title:"Queen of the Iron Islands",house:"Greyjoy",status:"Alive",actor:"Gemma Whelan",bio:"Fierce warrior and capable leader. Loyal to Theon despite his betrayals. Allied with Daenerys. Became Queen of the Iron Islands.",relations:"Father: Balon | Brother: Theon | Uncle: Euron",color:"var(--greyjoy)"},
  theon:{name:"Theon Greyjoy",title:"Prince of the Iron Islands",house:"Greyjoy / Stark (ward)",status:"Deceased (killed by Night King S8)",actor:"Alfie Allen",bio:"Raised as a ward (hostage) at Winterfell. Betrayed the Starks by taking Winterfell. Tortured by Ramsay Bolton and stripped of his identity ('Reek'). Redeemed himself by protecting Bran and died fighting the Night King.",relations:"Father: Balon | Sister: Yara | Foster Family: The Starks | Captor: Ramsay Bolton",color:"var(--greyjoy)"},
  euron:{name:"Euron Greyjoy",title:"King of the Iron Islands",house:"Greyjoy",status:"Deceased (killed by Jaime S8)",actor:"Pilou Asbæk",bio:"Balon's psychotic younger brother. Murdered Balon and seized the Iron Islands. Allied with Cersei. Killed one of Daenerys' dragons. Died fighting Jaime Lannister.",relations:"Brother: Balon | Nephew/Niece: Theon, Yara | Ally: Cersei Lannister",color:"var(--greyjoy)"},
  olenna:{name:"Olenna Tyrell",title:"The Queen of Thorns",house:"Tyrell",status:"Deceased (poison S7)",actor:"Diana Rigg",bio:"Sharp-tongued matriarch and the true power behind House Tyrell. Secretly arranged Joffrey's poisoning at his wedding. Killed by Jaime via painless poison. Her last words revealed she killed Joffrey.",relations:"Son: Mace | Grandchildren: Margaery, Loras",color:"var(--tyrell)"},
  margaery:{name:"Margaery Tyrell",title:"Queen (married Joffrey, then Tommen)",house:"Tyrell / Baratheon",status:"Deceased (wildfire explosion S6)",actor:"Natalie Dormer",bio:"Beautiful and politically savvy. Married three kings (Renly, Joffrey, Tommen) in her quest to be queen. Killed when Cersei destroyed the Great Sept of Baelor with wildfire.",relations:"Grandmother: Olenna | Father: Mace | Brother: Loras | Husbands: Renly, Joffrey, Tommen",color:"var(--tyrell)"},
  loras:{name:"Loras Tyrell",title:"The Knight of Flowers, Kingsguard",house:"Tyrell",status:"Deceased (wildfire explosion S6)",actor:"Finn Jones",bio:"Renowned tournament knight and Renly Baratheon's lover. Imprisoned by the Faith Militant for his sexuality. Killed in the destruction of the Great Sept.",relations:"Grandmother: Olenna | Father: Mace | Sister: Margaery | Lover: Renly Baratheon",color:"var(--tyrell)"},
  oberyn:{name:"Oberyn Martell",title:"The Red Viper of Dorne",house:"Martell",status:"Deceased (killed by The Mountain S4)",actor:"Pedro Pascal",bio:"Charismatic, bisexual warrior-prince. Came to King's Landing to avenge his sister Elia's murder. Fought The Mountain in Tyrion's trial by combat and nearly won, but was killed in one of the show's most brutal scenes.",relations:"Brother: Doran | Paramour: Ellaria Sand | Daughters: The Sand Snakes | Sister: Elia Martell (deceased)",color:"var(--martell)"},
  doran:{name:"Doran Martell",title:"Prince of Dorne",house:"Martell",status:"Deceased (killed by Ellaria S6)",actor:"Alexander Siddig",bio:"Patient, cautious ruler of Dorne who preferred peace. Murdered by Ellaria Sand and the Sand Snakes for his refusal to go to war.",relations:"Brother: Oberyn | Son: Trystane | Sister: Elia (deceased)",color:"var(--martell)"},
  littlefinger:{name:"Petyr 'Littlefinger' Baelish",title:"Master of Coin, Lord Protector of the Vale",house:"None (self-made)",status:"Deceased (executed by Arya S7)",actor:"Aidan Gillen",bio:"Master manipulator who orchestrated the War of the Five Kings from the shadows. Started the entire conflict by having Jon Arryn poisoned and framing the Lannisters. Executed by the Stark sisters after Bran revealed his crimes.",relations:"Obsession: Catelyn Tully | Married: Lysa Arryn | Mentored/Manipulated: Sansa Stark",color:"#6a5a7a"},
  drogo:{name:"Khal Drogo",title:"Khal of the Great Grass Sea",house:"Dothraki",status:"Deceased (mercy killed S1)",actor:"Jason Momoa",bio:"Powerful Dothraki warlord who married Daenerys. Initially a forced marriage that became a love story. Wounded in battle, a witch's spell left him in a vegetative state. Daenerys mercy-killed him.",relations:"Wife: Daenerys Targaryen",color:"#7a6a4a"},
  missandei:{name:"Missandei",title:"Advisor and Translator to Daenerys",house:"None (freed slave)",status:"Deceased (executed by Cersei S8)",actor:"Nathalie Emmanuel",bio:"Former slave from Naath who became Daenerys' most trusted advisor and friend. In a relationship with Grey Worm. Captured and beheaded by Cersei's forces. Her last word — 'Dracarys' — drove Daenerys' fury.",relations:"Queen: Daenerys | Lover: Grey Worm",color:"#8a7a5a"},
  jorah:{name:"Ser Jorah Mormont",title:"Knight, Lord Commander of the Queensguard",house:"Mormont",status:"Deceased (died defending Dany S8)",actor:"Iain Glen",bio:"Exiled Northern knight who devoted his life to Daenerys. Initially spied on her but fell deeply in love. Contracted and survived greyscale. Died protecting her during the Battle of Winterfell.",relations:"Queen/Love: Daenerys | House: Mormont of Bear Island",color:"#6a7a6a"},
  davos:{name:"Ser Davos Seaworth",title:"The Onion Knight, Hand of the King",house:"Seaworth",status:"Alive",actor:"Liam Cunningham",bio:"Former smuggler knighted by Stannis. Loyal advisor who always spoke truth to power. Served Stannis, then Jon Snow, then Bran Stark. One of the most consistently good people in the series.",relations:"King: Stannis → Jon → Bran | Friend: Shireen Baratheon",color:"#7a7a7a"},
  melisandre:{name:"Melisandre",title:"The Red Woman, Priestess of R'hllor",house:"None",status:"Deceased (died of old age S8)",actor:"Carice van Houten",bio:"Centuries-old priestess of the Lord of Light. Convinced Stannis to burn people alive, including Shireen. Resurrected Jon Snow. Helped defeat the White Walkers and then let herself die.",relations:"Served: Stannis, Jon Snow | Resurrected: Jon Snow",color:"#b03030"},
  lyanna:{name:"Lyanna Stark",title:"Ned's Sister, The Wolf Maid",house:"Stark",status:"Deceased (died giving birth)",actor:"Aisling Franciosi",bio:"Ned's beloved sister whose 'kidnapping' by Rhaegar started Robert's Rebellion. She actually loved Rhaegar and married him secretly. Died giving birth to Jon Snow, asking Ned to protect him.",relations:"Brothers: Ned, Benjen, Brandon | Husband: Rhaegar Targaryen | Son: Jon Snow/Aegon",color:"var(--stark)"},
  edmure:{name:"Edmure Tully",title:"Lord of Riverrun",house:"Tully",status:"Alive",actor:"Tobias Menzies",bio:"Catelyn and Lysa's younger brother. Well-meaning but often bungling. Captured at the Red Wedding and held prisoner for years. Freed and given his lordship back.",relations:"Father: Hoster | Sisters: Catelyn, Lysa | Uncle: Brynden 'Blackfish'",color:"var(--tully)"},
  robin:{name:"Robin Arryn",title:"Lord of the Eyrie",house:"Arryn",status:"Alive",actor:"Lino Facioli",bio:"Sickly, sheltered child of Jon and Lysa Arryn. Spoiled and unstable in early seasons. Manipulated by Littlefinger. Grew up and supported Sansa at the Battle of the Bastards via the Knights of the Vale.",relations:"Parents: Jon Arryn & Lysa Tully | Stepfather: Littlefinger | Cousin: Sansa Stark",color:"var(--arryn)"},
  lysa:{name:"Lysa Arryn",title:"Lady of the Eyrie, née Tully",house:"Tully / Arryn",status:"Deceased (pushed through Moon Door S4)",actor:"Kate Dickie",bio:"Catelyn's younger sister. Married Jon Arryn and became Lady of the Eyrie. Secretly poisoned her own husband at Littlefinger's instruction, which triggered the entire series of events. Obsessively protective of her son Robin. Pushed through the Moon Door by Littlefinger.",relations:"Husband: Jon Arryn | Son: Robin Arryn | Lover: Petyr Baelish | Father: Hoster Tully | Siblings: Catelyn, Edmure",color:"var(--tully)"},
  greyworm:{name:"Grey Worm",title:"Commander of the Unsullied",house:"None (freed slave)",status:"Alive",actor:"Jacob Anderson",bio:"Born as an Unsullied slave soldier in Astapor. Freed by Daenerys and became commander of her army. In a relationship with Missandei. After Daenerys' death, sailed to Naath to protect Missandei's homeland.",relations:"Queen: Daenerys | Lover: Missandei",color:"#7a7a8a"},
  ellaria:{name:"Ellaria Sand",title:"Paramour of Oberyn Martell",house:"Martell (by association)",status:"Unknown",actor:"Indira Varma",bio:"Oberyn Martell's lover and mother of several Sand Snakes. After Oberyn's death, she seized control of Dorne by killing Doran and Trystane. Poisoned Myrcella for revenge. Captured by Euron and imprisoned by Cersei.",relations:"Lover: Oberyn Martell | Daughters: The Sand Snakes | Killed: Myrcella Baratheon",color:"var(--martell)"},
  selyse:{name:"Selyse Baratheon",title:"Queen, née Florent",house:"Baratheon / Florent",status:"Deceased (suicide S5)",actor:"Tara Fitzgerald",bio:"Stannis' wife and a fervent follower of the Lord of Light. Allowed Melisandre to sacrifice their daughter Shireen. Hanged herself in grief after witnessing the burning.",relations:"Husband: Stannis | Daughter: Shireen",color:"var(--baratheon)"},
  shireen:{name:"Shireen Baratheon",title:"Princess",house:"Baratheon",status:"Deceased (burned alive S5)",actor:"Kerry Ingram",bio:"Stannis and Selyse's only child. Kind, intelligent girl who survived greyscale. Taught Davos to read. Burned alive as a sacrifice to the Lord of Light at Melisandre's urging.",relations:"Parents: Stannis & Selyse | Friend: Davos Seaworth",color:"var(--baratheon)"},
  mace:{name:"Mace Tyrell",title:"Lord of Highgarden, Warden of the South",house:"Tyrell",status:"Deceased (wildfire explosion S6)",actor:"Roger Ashton-Griffiths",bio:"Olenna's son and nominal head of House Tyrell, though his mother held the real power. Served as Master of Ships and Master of Coin. Killed in the destruction of the Great Sept of Baelor.",relations:"Mother: Olenna | Children: Margaery, Loras",color:"var(--tyrell)"},
  blackfish:{name:"Brynden 'The Blackfish' Tully",title:"Ser, Knight of the Riverlands",house:"Tully",status:"Deceased (killed offscreen S6)",actor:"Clive Russell",bio:"Hoster Tully's younger brother and a legendary military commander. Held Riverrun against the Freys and Lannisters. Refused to surrender and died fighting offscreen during the siege of Riverrun.",relations:"Brother: Hoster Tully | Nieces: Catelyn, Lysa | Nephew: Edmure",color:"var(--tully)"},
  hoster:{name:"Hoster Tully",title:"Lord of Riverrun",house:"Tully",status:"Deceased (illness S3)",actor:"Chris Newman",bio:"Patriarch of House Tully and Lord of Riverrun. Father to Catelyn, Lysa, and Edmure. Died of prolonged illness. His funeral by riverboat pyre was attended by his family.",relations:"Children: Catelyn, Lysa, Edmure | Brother: Brynden 'The Blackfish'",color:"var(--tully)"},
  trystane:{name:"Trystane Martell",title:"Prince of Dorne",house:"Martell",status:"Deceased (killed by Sand Snakes S6)",actor:"Toby Sebastian",bio:"Doran's son and heir to Sunspear. Kind young man betrothed to Myrcella Baratheon. Murdered by Obara and Nymeria Sand as part of Ellaria's coup against Doran.",relations:"Father: Doran | Uncle: Oberyn | Betrothed: Myrcella Baratheon",color:"var(--martell)"},
  kevan:{name:"Kevan Lannister",title:"Ser, Hand of the King",house:"Lannister",status:"Deceased (wildfire explosion S6)",actor:"Ian Gelder",bio:"Tywin's younger brother and loyal second-in-command. After Tywin's death, served as Hand of the King to Tommen. Killed in the destruction of the Great Sept of Baelor alongside the Tyrells.",relations:"Brother: Tywin | Son: Lancel | Nephew/Niece: Cersei, Jaime, Tyrion",color:"var(--lannister)"},
  elia:{name:"Elia Martell",title:"Princess of Dorne, wife of Rhaegar",house:"Martell / Targaryen",status:"Deceased (murdered during Robert's Rebellion)",actor:"Not shown on screen",bio:"Oberyn's sister who married Prince Rhaegar Targaryen. Mother of Rhaenys and Aegon. Brutally murdered by Gregor 'The Mountain' Clegane during the Sack of King's Landing. Her death fuels Oberyn's quest for revenge.",relations:"Husband: Rhaegar Targaryen | Brother: Oberyn | Children: Rhaenys, Aegon (both killed)",color:"var(--martell)"},
  rhaella:{name:"Rhaella Targaryen",title:"Queen of the Seven Kingdoms",house:"Targaryen",status:"Deceased (died in childbirth)",actor:"Not shown on screen",bio:"Wife and sister of the Mad King Aerys II. Mother of Rhaegar, Viserys, and Daenerys. Died giving birth to Daenerys on Dragonstone during a great storm, giving Daenerys the epithet 'Stormborn.'",relations:"Husband/Brother: Aerys II | Children: Rhaegar, Viserys, Daenerys",color:"var(--targaryen)"},
  samwell:{name:"Samwell Tarly",title:"Maester, Grand Maester to King Bran",house:"Tarly / Night's Watch",status:"Alive",actor:"John Bradley",bio:"Jon Snow's best friend at the Night's Watch. Intelligent and bookish but initially cowardly, he grew into a brave man. Discovered dragonglass kills White Walkers. Cured Jorah's greyscale. Became Grand Maester to King Bran.",relations:"Best Friend: Jon Snow | Partner: Gilly | Father: Randyll Tarly (deceased) | Mentor: Maester Aemon",color:"#2a2a2a"},
  ygritte:{name:"Ygritte",title:"Wildling Spearwife",house:"Free Folk",status:"Deceased (killed in Battle of Castle Black S4)",actor:"Rose Leslie",bio:"Fierce wildling warrior who fell in love with Jon Snow when he infiltrated the wildlings undercover. Famous for her catchphrase 'You know nothing, Jon Snow.' Killed by Olly during the wildling assault on Castle Black.",relations:"Lover: Jon Snow | People: Free Folk",color:"#5a4a3a"},
  tormund:{name:"Tormund Giantsbane",title:"Free Folk Leader",house:"Free Folk",status:"Alive",actor:"Kristofer Hivju",bio:"Boisterous wildling leader who became one of Jon Snow's most loyal allies. Fought alongside Jon against the Boltons and the White Walkers. Had a notable infatuation with Brienne of Tarth.",relations:"Ally: Jon Snow | Crush: Brienne of Tarth",color:"#5a4a3a"},
  hodor:{name:"Hodor",title:"Bran's Protector",house:"Stark (servant)",status:"Deceased (held the door S6)",actor:"Kristian Nairn",bio:"Gentle giant whose real name was Wylis. Could only say 'Hodor.' Carried Bran Stark on his back after Bran was crippled. Sacrificed himself holding a door against wights so Bran and Meera could escape. His name was revealed to be a corruption of 'Hold the door.'",relations:"Protected: Bran Stark | Companions: Meera Reed",color:"var(--stark)"},
  gilly:{name:"Gilly",title:"Free Folk, Sam's Partner",house:"None",status:"Alive",actor:"Hannah Murray",bio:"Daughter-wife of Craster, a wildling who married his own daughters. Rescued by Sam beyond the Wall. Discovered a crucial record of Rhaegar's annulment and secret marriage while reading in the Citadel.",relations:"Partner: Samwell Tarly | Son: Little Sam | Father: Craster",color:"#5a4a3a"},
  brienne:{name:"Brienne of Tarth",title:"Ser, Lord Commander of the Kingsguard",house:"Tarth",status:"Alive",actor:"Gwendoline Christie",bio:"Tall, powerful warrior woman determined to prove herself as a knight. Sworn to protect the Stark girls. Fought a bear, defeated the Hound, killed Stannis. Knighted by Jaime Lannister. Became Lord Commander of Bran's Kingsguard.",relations:"Sworn to: Catelyn, then Sansa | Knighted by: Jaime Lannister | Squire: Podrick Payne",color:"#5a6a7a"},
  hound:{name:"Sandor 'The Hound' Clegane",title:"Sworn Shield, Reluctant Protector",house:"Clegane",status:"Deceased (Cleganebowl S8)",actor:"Rory McCann",bio:"Scarred warrior who hated fire after his brother Gregor burned his face as a child. Served the Lannisters but grew disillusioned. Became Arya's reluctant protector and travel companion. Died fighting his brother 'The Mountain' in the epic Cleganebowl.",relations:"Brother: Gregor 'The Mountain' | Protected: Arya Stark, Sansa Stark",color:"#4a4a4a"},
  mountain:{name:"Gregor 'The Mountain' Clegane",title:"Ser, Cersei's Champion",house:"Clegane / Lannister",status:"Deceased (Cleganebowl S8)",actor:"Hafþór Júlíus Björnsson",bio:"The largest and most feared knight in Westeros. Burned his brother's face as a child. Killed Oberyn Martell in trial by combat. Killed by Qyburn's experiments and reanimated as a zombie-like bodyguard for Cersei. Died fighting his brother.",relations:"Brother: Sandor 'The Hound' | Killed: Oberyn Martell, Elia Martell | Served: Cersei Lannister",color:"#4a4a4a"},
  podrick:{name:"Podrick Payne",title:"Ser, Knight of the Kingsguard",house:"Payne",status:"Alive",actor:"Daniel Portman",bio:"Shy, loyal squire who served Tyrion Lannister and then became Brienne of Tarth's squire. Grew from a nervous boy into a capable knight. Knighted after the Battle of Winterfell. Joined Bran's Kingsguard.",relations:"Served: Tyrion Lannister, then Brienne of Tarth",color:"#5a5a5a"},
  bronn:{name:"Lord Bronn of the Blackwater",title:"Lord of Highgarden, Master of Coin",house:"None (self-made)",status:"Alive",actor:"Jerome Flynn",bio:"Witty sellsword who became Tyrion's bodyguard after winning his trial by combat at the Eyrie. Fought in the Battle of the Blackwater. Later worked for Jaime. Negotiated his way to becoming Lord of Highgarden and Master of Coin.",relations:"Served: Tyrion Lannister, Jaime Lannister | Reward: Highgarden",color:"#5a5a5a"},
  varys:{name:"Lord Varys",title:"The Spider, Master of Whisperers",house:"None (eunuch)",status:"Deceased (executed by dragonfire S8)",actor:"Conleth Hill",bio:"Master spy and political manipulator who served on the Small Council under multiple kings. A eunuch with a vast network of informants called 'little birds.' Truly loyal to the realm, not any king. Switched allegiance to Daenerys, then tried to poison her when she went mad. Executed by dragonfire.",relations:"Ally: Tyrion Lannister | Served: Robert, Joffrey, Tommen, Daenerys | Rival: Littlefinger",color:"#5a5a6a"},
  pycelle:{name:"Grand Maester Pycelle",title:"Grand Maester of the Seven Kingdoms",house:"None (Citadel)",status:"Deceased (murdered by Qyburn's children S6)",actor:"Julian Glover",bio:"Elderly Grand Maester who served on the Small Council for decades. Secretly a Lannister loyalist. Murdered by Qyburn's 'little birds' during Cersei's wildfire plot.",relations:"Served: Multiple kings | Loyal to: House Lannister",color:"#5a5a5a"},
  qyburn:{name:"Qyburn",title:"Hand of the Queen to Cersei",house:"None (ex-Maester)",status:"Deceased (killed by The Mountain S8)",actor:"Anton Lesser",bio:"Former Maester expelled from the Citadel for unethical experiments. Became Cersei's most trusted advisor. Reanimated Gregor Clegane as a zombie. Served as her Hand. Ironically killed by his own creation, The Mountain.",relations:"Served: Cersei Lannister | Created: Zombie Mountain",color:"#5a5a5a"},
  highsparrow:{name:"The High Sparrow",title:"High Septon, Leader of the Faith Militant",house:"Faith of the Seven",status:"Deceased (wildfire explosion S6)",actor:"Jonathan Pryce",bio:"Humble, barefoot religious leader who amassed enormous power by reviving the Faith Militant. Imprisoned Cersei and Margaery. His overreach led Cersei to destroy the entire Great Sept of Baelor with wildfire, killing him and hundreds.",relations:"Imprisoned: Cersei, Margaery, Loras | Antagonist to: Lannisters, Tyrells",color:"#5a5a5a"},
  daario:{name:"Daario Naharis",title:"Captain of the Second Sons",house:"None (sellsword)",status:"Alive",actor:"Michiel Huisman",bio:"Charismatic sellsword captain who pledged his company to Daenerys and became her lover in Meereen. Left behind to keep the peace in Slaver's Bay when Daenerys sailed for Westeros.",relations:"Lover: Daenerys Targaryen | Company: Second Sons",color:"#6a5a3a"},
  jaqen:{name:"Jaqen H'ghar",title:"Faceless Man, A Man Has No Name",house:"Faceless Men (Braavos)",status:"Alive",actor:"Tom Wlaschiha",bio:"Mysterious assassin from the House of Black and White in Braavos. First encountered by Arya as a prisoner. Granted her three kills. Later trained her in Braavos in the art of becoming 'No One.'",relations:"Student: Arya Stark | Order: Faceless Men",color:"#4a4a5a"},
  ramsay:{name:"Ramsay Bolton",title:"Lord of Winterfell, Warden of the North",house:"Bolton",status:"Deceased (eaten by his own hounds S6)",actor:"Iwan Rheon",bio:"Sadistic bastard son of Roose Bolton, later legitimized. Tortured Theon Greyjoy into 'Reek.' Married and brutalized Sansa Stark. Defeated by Jon Snow in the Battle of the Bastards and executed by Sansa, who fed him to his own starving hounds.",relations:"Father: Roose Bolton | Victims: Theon Greyjoy, Sansa Stark, Rickon Stark",color:"var(--bolton)"},
  roose:{name:"Roose Bolton",title:"Lord of the Dreadfort, Warden of the North",house:"Bolton",status:"Deceased (stabbed by Ramsay S6)",actor:"Michael McElhatton",bio:"Cold, calculating lord who betrayed the Starks at the Red Wedding by personally stabbing Robb Stark. Named Warden of the North by the Lannisters. Murdered by his own son Ramsay.",relations:"Son: Ramsay Bolton | Betrayed: Robb Stark, House Stark",color:"var(--bolton)"},
  walder:{name:"Walder Frey",title:"Lord of the Crossing",house:"Frey",status:"Deceased (throat slit by Arya S6)",actor:"David Bradley",bio:"Treacherous, ancient lord of the Twins who orchestrated the Red Wedding, violating sacred guest right by murdering Robb Stark, Catelyn Stark, and their army at a wedding feast. Killed by Arya Stark, who then used his face to poison the entire Frey family.",relations:"Victims: Robb Stark, Catelyn Stark | Killed by: Arya Stark",color:"var(--frey)"},
  nightking:{name:"The Night King",title:"Leader of the White Walkers",house:"White Walkers",status:"Deceased (shattered by Arya S8)",actor:"Vladimir Furdik",bio:"Ancient being created by the Children of the Forest as a weapon against the First Men. Led the army of the dead south to destroy all living memory. Killed Viserion the dragon and turned him into an ice dragon. Shattered by Arya Stark's Valyrian steel dagger during the Battle of Winterfell.",relations:"Created by: Children of the Forest | Killed by: Arya Stark | Dragon: Viserion (undead)",color:"var(--whitewalker)"},
  // Targaryen Dynasty Ancestors (Book Lore / AKOTSK)
  aegonIV:{name:"Aegon IV Targaryen",title:"'The Unworthy' · King of the Seven Kingdoms",house:"Targaryen",status:"Deceased (natural causes, ~184 AC)",actor:"Book character",bio:"One of the worst kings in Targaryen history. Glutton, hedonist, and terrible ruler whose dying act — legitimizing all his bastard children — caused generations of civil war. Father of the Great Bastards: Daemon Blackfyre, Bloodraven, Bittersteel, and Shiera Seastar.",relations:"Wife: Naerys Targaryen | Son: Daeron II | Bastards: Daemon Blackfyre, Bloodraven, Bittersteel, Shiera Seastar",color:"var(--targaryen)"},
  naerys:{name:"Naerys Targaryen",title:"Queen · Wife of Aegon IV",house:"Targaryen",status:"Deceased (natural causes, ~179 AC)",actor:"Book character",bio:"Pious, gentle queen and sister-wife of Aegon IV. Deeply unhappy in her marriage to the Unworthy. Beloved by the people and by her brother Aemon the Dragonknight, who was her sworn protector. Mother of Daeron II.",relations:"Husband: Aegon IV | Son: Daeron II | Brother: Aemon the Dragonknight",color:"var(--targaryen)"},
  daeronII:{name:"Daeron II Targaryen",title:"'The Good' · King of the Seven Kingdoms",house:"Targaryen",status:"Deceased (Great Spring Sickness, ~209 AC)",actor:"Book character",bio:"Wise and scholarly king who united Dorne with the Iron Throne through marriage to Mariah Martell — the first Martell-Targaryen alliance. Won the First Blackfyre Rebellion against his half-brother Daemon Blackfyre. Father of Baelor Breakspear and Maekar I.",relations:"Parents: Aegon IV & Naerys | Wife: Mariah Martell | Sons: Baelor Breakspear, Maekar I | Rival: Daemon Blackfyre",color:"var(--targaryen)"},
  mariahM:{name:"Mariah Martell",title:"Princess of Dorne · Queen Consort",house:"Martell / Targaryen",status:"Deceased (natural causes)",actor:"Book character",bio:"Dornish princess whose marriage to Daeron II brought Dorne peacefully into the Seven Kingdoms — the first Martell-Targaryen pact. This alliance would echo centuries later when Elia Martell married Rhaegar Targaryen.",relations:"Husband: Daeron II | Sons: Baelor Breakspear, Maekar I | House: Martell",color:"var(--martell)"},
  baelorB:{name:"Baelor Targaryen",title:"'Breakspear' · Crown Prince · Hand of the King",house:"Targaryen",status:"Deceased (killed in trial by seven at Ashford, ~209 AC)",actor:"Book character (AKOTSK S1)",bio:"Beloved crown prince and son of Daeron II. Half-Dornish in appearance with dark hair, breaking the traditional Targaryen look. The hero of The Hedge Knight — he championed Dunk in the trial by seven at Ashford Meadow but was accidentally struck and killed by his own brother Maekar during the melee.",relations:"Father: Daeron II | Mother: Mariah Martell | Brother: Maekar I | Championed: Ser Duncan the Tall",color:"var(--targaryen)"},
  maekar:{name:"Maekar I Targaryen",title:"King of the Seven Kingdoms",house:"Targaryen",status:"Deceased (killed in battle at Starpike, ~233 AC)",actor:"Book character (AKOTSK S1)",bio:"Fourth son of Daeron II who became king after his older brothers' lines died out. Fierce warrior who accidentally killed his brother Baelor Breakspear during the trial by seven — a guilt he carried for life. Father of Aerion Brightflame, Daeron the Drunken, Maester Aemon, and Aegon V (Egg).",relations:"Father: Daeron II | Mother: Mariah Martell | Brother: Baelor Breakspear | Sons: Aerion, Daeron, Aemon, Aegon V (Egg)",color:"var(--targaryen)"},
  aerion:{name:"Aerion Targaryen",title:"'Brightflame' · Prince",house:"Targaryen",status:"Deceased (drank wildfire believing it would transform him into a dragon, ~232 AC)",actor:"Book character (AKOTSK S1)",bio:"Cruel, vain, and possibly mad prince. Eldest surviving son of Maekar I. The primary antagonist of The Hedge Knight — he attacked a puppet show and brutalized the puppeteer, prompting Dunk to strike a prince and trigger the trial by seven. Died drinking wildfire, believing it would turn him into a dragon.",relations:"Father: Maekar I | Brothers: Daeron, Aemon, Aegon V (Egg)",color:"var(--targaryen)"},
  daeronD:{name:"Daeron Targaryen",title:"'The Drunken' · Prince",house:"Targaryen",status:"Deceased (Great Spring Sickness, ~209 AC)",actor:"Book character (AKOTSK S1)",bio:"Son of Maekar I, known for his drinking and prophetic dragon dreams — a Targaryen trait. Despite his nickname, he was kind-hearted. Had a prophetic dream about Dunk's role at the Ashford tourney. Died young in the Great Spring Sickness.",relations:"Father: Maekar I | Brothers: Aerion, Aemon, Aegon V (Egg)",color:"var(--targaryen)"},
  aemonT:{name:"Maester Aemon",title:"Aemon Targaryen · Maester of Castle Black",house:"Targaryen / Night's Watch",status:"Deceased (died of old age at sea, S5)",actor:"Peter Vaughan",bio:"Born Aemon Targaryen, son of King Maekar I. Forswore his claim to the throne and joined the Citadel, then the Night's Watch. Served as Maester at Castle Black for decades. Mentored Jon Snow and Samwell Tarly. One of Daenerys's few living relatives, though they never met. Died at over 100 years old.",relations:"Father: Maekar I | Brothers: Aegon V (Egg), Aerion, Daeron | Great-great-nephew: Jon Snow | Mentored: Samwell Tarly, Jon Snow | Great-niece: Daenerys (never met)",color:"var(--targaryen)"},
  aegonV:{name:"Aegon V Targaryen",title:"'The Unlikely' · 'Egg' · King of the Seven Kingdoms",house:"Targaryen",status:"Deceased (Tragedy at Summerhall, ~259 AC)",actor:"Dexter Sol Ansell (AKOTSK)",bio:"Fourth son of a fourth son, he was never expected to rule — hence 'The Unlikely.' As a boy called 'Egg,' he served as squire to the hedge knight Ser Duncan the Tall, traveling Westeros and learning the lives of common people. Became a wise, reform-minded king. Died at the Tragedy at Summerhall, likely trying to hatch dragon eggs. His grandson was Aerys II, the Mad King.",relations:"Father: Maekar I | Brothers: Aerion, Daeron, Aemon | Knight: Ser Duncan the Tall | Grandson: Aerys II (The Mad King)",color:"var(--targaryen)"},
  // Great Bastards & House Blackfyre
  daemonB:{name:"Daemon Blackfyre",title:"Founder of House Blackfyre · The Black Dragon",house:"Blackfyre",status:"Deceased (killed at the Battle of the Redgrass Field, ~196 AC)",actor:"Book character",bio:"The most famous of Aegon IV's Great Bastards. Given the Valyrian steel sword Blackfyre — the sword of Targaryen kings — by his father, which many saw as a sign of legitimacy. Led the First Blackfyre Rebellion against his half-brother King Daeron II. A legendary warrior, he was killed in battle by Bloodraven's archers at the Redgrass Field.",relations:"Father: Aegon IV (bastard) | Half-brothers: Daeron II, Bloodraven, Bittersteel | Half-sister: Shiera Seastar | Son: Daemon II Blackfyre | Rival: Daeron II",color:"var(--blackfyre)"},
  bloodraven:{name:"Brynden Rivers",title:"'Bloodraven' · Hand of the King · Three-Eyed Raven",house:"Targaryen (bastard) / Night's Watch",status:"Deceased (killed when the Night King attacked the cave, S6)",actor:"Max von Sydow (as Three-Eyed Raven)",bio:"One of Aegon IV's Great Bastards, an albino sorcerer with one red eye. Served as Hand of the King and master of spies. Sent to the Wall and eventually went beyond it, merging with a weirwood tree and becoming the Three-Eyed Raven. Waited centuries for Bran Stark, training him to inherit the role. Killed when the Night King breached his cave.",relations:"Father: Aegon IV (bastard) | Half-brothers: Daemon Blackfyre, Bittersteel, Daeron II | Half-sister/Lover: Shiera Seastar | Rival: Bittersteel | Trained: Bran Stark",color:"var(--blackfyre)"},
  bittersteel:{name:"Aegor Rivers",title:"'Bittersteel' · Founder of the Golden Company",house:"Targaryen (bastard)",status:"Deceased (died in exile in Essos)",actor:"Book character",bio:"One of Aegon IV's Great Bastards, half-brother and bitter rival of Bloodraven. Supported Daemon Blackfyre's rebellion against the throne. After the Blackfyres' defeat, he fled to Essos and founded the Golden Company — the most famous sellsword company in the world — to continue the Blackfyre cause. Cersei Lannister hired the Golden Company in Season 8.",relations:"Father: Aegon IV (bastard) | Half-brothers: Daemon Blackfyre, Bloodraven, Daeron II | Half-sister: Shiera Seastar | Rival: Bloodraven | Founded: The Golden Company",color:"var(--blackfyre)"},
  shiera:{name:"Shiera Seastar",title:"The Most Beautiful Woman in Westeros",house:"Targaryen (bastard)",status:"Deceased (unknown circumstances)",actor:"Book character",bio:"The last of Aegon IV's Great Bastards, renowned as the most beautiful woman in the Seven Kingdoms. A practitioner of dark arts who bathed in blood to maintain her beauty. Both Bloodraven and Bittersteel desired her, fueling their lifelong rivalry. She chose Bloodraven as her lover.",relations:"Father: Aegon IV (bastard) | Half-brothers: Daemon Blackfyre, Bloodraven, Bittersteel | Lover: Bloodraven",color:"var(--blackfyre)"},
  daemonBII:{name:"Daemon II Blackfyre",title:"The Second Blackfyre Pretender",house:"Blackfyre",status:"Deceased (died in custody after the Second Blackfyre Rebellion, ~212 AC)",actor:"Book character",bio:"Son of Daemon I Blackfyre. Unlike his warrior father, he was a dreamer who had prophetic dragon dreams. Central figure in The Mystery Knight, the third Dunk & Egg novella, where he plotted the Second Blackfyre Rebellion at a tournament. Unmasked by Bloodraven's spies and captured by Ser Duncan the Tall.",relations:"Father: Daemon Blackfyre | Captured by: Ser Duncan the Tall | Rival: Bloodraven",color:"var(--blackfyre)"},
  // Dunk & Egg Protagonist
  dunk:{name:"Ser Duncan the Tall",title:"Hedge Knight · Lord Commander of the Kingsguard",house:"None (hedge knight)",status:"Deceased (Tragedy at Summerhall, ~259 AC)",actor:"Peter Claffey (AKOTSK)",bio:"A towering hedge knight of humble origins who became one of the greatest knights in Westerosi history. Protagonist of A Knight of the Seven Kingdoms. Took young Prince Aegon 'Egg' Targaryen as his squire and traveled Westeros having adventures. Eventually became Lord Commander of the Kingsguard. Died alongside his king (Aegon V) at the Tragedy at Summerhall. Book lore strongly implies he is an ancestor of Brienne of Tarth.",relations:"Squire: Aegon V 'Egg' | Championed by: Baelor Breakspear | Descendant: Brienne of Tarth (book lore) | Captured: Daemon II Blackfyre",color:"#5a6a7a"},
};


// ========== 2. CARD ALIASES ==========
const cardAliases={
  rhaegar2:'rhaegar',rhaegar3:'rhaegar',rhaegar4:'rhaegar',
  cersei2:'cersei',robert2:'robert',catelyn2:'catelyn',
  lyanna2:'lyanna',lysa2:'lysa',jon2:'jon',theon_s:'theon',
  aemonT2:'aemonT',bloodraven2:'bloodraven'
};


// ========== 3. DEATH SEASON ==========
const deathSeason={
  eddard:1,robert:1,drogo:1,viserys:1,lyanna:0,aerys:0,rhaella:0,rhaegar:0,elia:0,hoster:3,jonA:0,
  renly:2,
  robb:3,catelyn:3,
  joffrey:4,tywin:4,oberyn:4,lysa:4,
  jon:5,stannis:5,selyse:5,shireen:5,myrcella:5,
  tommen:6,margaery:6,loras:6,mace:6,rickon:6,doran:6,trystane:6,balon:6,blackfish:6,kevan:6,
  olenna:7,littlefinger:7,benjen:6,
  cersei:8,jaime:8,daenerys:8,theon:8,jorah:8,missandei:8,euron:8,melisandre:8,lancel:6,
  ygritte:4,hodor:6,pycelle:6,highsparrow:6,ramsay:6,roose:6,walder:6,
  varys:8,hound:8,mountain:8,qyburn:8,nightking:8,
  aegonIV:0,naerys:0,daeronII:0,mariahM:0,baelorB:0,maekar:0,aerion:0,daeronD:0,
  aemonT:5,aegonV:0,daemonB:0,bloodraven:6,bittersteel:0,shiera:0,daemonBII:0,dunk:0
};


// ========== 4. BIO SAFE UP TO ==========
const bioSafeUpTo={
  eddard:1,catelyn:3,robb:3,sansa:8,arya:8,bran:8,rickon:6,
  jon:8,benjen:6,tywin:4,cersei:8,jaime:8,tyrion:8,
  joffrey:4,myrcella:5,tommen:6,aerys:0,rhaegar:7,rhaella:0,
  viserys:1,daenerys:8,robert:1,stannis:5,renly:2,gendry:8,
  balon:6,yara:8,theon:8,euron:8,olenna:7,margaery:6,loras:6,
  oberyn:4,doran:6,ellaria:7,littlefinger:7,drogo:1,missandei:8,
  jorah:8,davos:8,melisandre:8,lyanna:7,edmure:8,robin:6,
  elia:7,hoster:3,jonA:0,trystane:6,selyse:5,shireen:5,
  mace:6,blackfish:6,kevan:6,lancel:6,greyworm:8,lysa:4,
  samwell:8,ygritte:4,tormund:8,hodor:6,gilly:8,brienne:8,hound:8,mountain:8,
  podrick:8,bronn:8,varys:8,pycelle:6,qyburn:8,highsparrow:6,daario:6,jaqen:6,
  ramsay:6,roose:6,walder:6,nightking:8,
  aegonIV:0,naerys:0,daeronII:0,mariahM:0,baelorB:0,maekar:0,aerion:0,daeronD:0,
  aemonT:5,aegonV:0,daemonB:0,bloodraven:6,bittersteel:8,shiera:0,daemonBII:0,dunk:0
};


// ========== 5. SPOILER REVEALS ==========
const jonSafeReveal={season:7,
  safeName:"Jon Snow",
  safeTitle:"Bastard of Winterfell · Night's Watch",
  safeBio:"Believed to be Ned Stark's bastard son. Raised at Winterfell alongside the Stark children. Joined the Night's Watch at Castle Black.",
  safeRelations:"Raised by: Ned Stark | Stark siblings: Robb, Sansa, Arya, Bran, Rickon"
};

const bloodravenSafeReveal={season:6,
  safeName:"Brynden Rivers 'Bloodraven'",
  safeTitle:"Great Bastard of Aegon IV · Hand of the King",
  safeBio:"One of the Great Bastards of King Aegon IV, an albino sorcerer with one red eye. Served as Hand of the King and master of spies. Eventually joined the Night's Watch and disappeared beyond the Wall.",
  safeRelations:"Father: Aegon IV (bastard) | Half-brothers: Daemon Blackfyre, Bittersteel | Half-sister/Lover: Shiera Seastar | Rival: Bittersteel"
};

const spoilerReveals={jon:jonSafeReveal,jon2:jonSafeReveal,bloodraven:bloodravenSafeReveal,bloodraven2:bloodravenSafeReveal};

// ========== 6. CARD SPOILER DATA ==========
const cardSpoilerData = {
  robb:     [{ min:2, title:"King in the North · The Young Wolf" },
             { min:0, title:"Eldest Son of Winterfell" }],
  sansa:    [{ min:8, title:"Queen in the North · Lady of Winterfell" },
             { min:6, title:"Lady of Winterfell" },
             { min:0, title:"Eldest Daughter of Winterfell" }],
  arya:     [{ min:5, title:"The Girl with No Name · Faceless" },
             { min:0, title:"Daughter of Winterfell" }],
  bran:     [{ min:8, title:"The Three-Eyed Raven · King of the Six Kingdoms" },
             { min:6, title:"The Three-Eyed Raven" },
             { min:0, title:"Son of Winterfell" }],
  theon:    [{ min:3, title:"Prince · \"Reek\" · Ward of Winterfell" },
             { min:0, title:"Prince of the Iron Islands · Ward of Winterfell" }],
  tyrion:   [{ min:8, title:"The Imp · Hand of the King (to Daenerys & Bran)" },
             { min:6, title:"The Imp · Hand of the Queen" },
             { min:2, title:"The Imp · Acting Hand of the King" },
             { min:0, title:"The Imp · Son of Tywin Lannister" }],
  cersei:   [{ min:6, title:"Queen of the Seven Kingdoms · Queen Regent" },
             { min:0, title:"Queen of the Seven Kingdoms" }],
  joffrey:  [{ min:4, title:"King · Eldest \"Son\"", tag:"Son (bio: Jaime)" },
             { min:1, title:"King · Eldest \"Son\"", tag:"Son (bio: Jaime)" },
             { min:0, title:"Crown Prince · Eldest Son", tag:"Eldest Son" }],
  myrcella: [{ min:1, title:"Princess", tag:"Daughter (bio: Jaime)" },
             { min:0, title:"Princess", tag:"Daughter" }],
  tommen:   [{ min:4, title:"King after Joffrey", tag:"Son (bio: Jaime)" },
             { min:1, title:"Prince", tag:"Son (bio: Jaime)" },
             { min:0, title:"Prince", tag:"Youngest Son" }],
  gendry:   [{ min:8, title:"Bastard of Robert · Legitimized as Baratheon · Lord of Storm's End" },
             { min:1, title:"Bastard of Robert Baratheon" },
             { min:0, title:"Blacksmith's Apprentice" }],
  robert:   [{ min:1, tag:"Husband (official)" },
             { min:0, tag:"Husband" }],
  yara:     [{ min:8, title:"Captain · Queen of the Iron Islands" },
             { min:0, title:"Captain · Daughter of Balon" }],
  euron:    [{ min:6, title:"King of the Iron Islands · Captain of the Silence" },
             { min:0, title:"Balon's Brother · Captain of the Silence" }],
  margaery: [{ min:5, title:"Queen (to Joffrey, then Tommen)" },
             { min:3, title:"Queen (to Joffrey)" },
             { min:2, title:"Queen (to Renly)" },
             { min:0, title:"Maiden of Highgarden" }],
  ellaria:  [{ min:6, title:"Oberyn's Paramour · Leader of the Sand Snakes" },
             { min:0, title:"Oberyn's Paramour" }],
  mountain: [{ min:6, title:"\"The Mountain\" · Cersei's Champion · Undead" },
             { min:4, title:"\"The Mountain\" · Cersei's Champion" },
             { min:0, title:"\"The Mountain\" · Lannister Bannerman" }],
  qyburn:   [{ min:6, title:"Cersei's Hand · Creator of \"The Mountain\"" },
             { min:0, title:"Former Maester · Scientist" }],
  davos:    [{ min:8, title:"The Onion Knight · Hand of the King" },
             { min:6, title:"The Onion Knight · Jon Snow's Advisor" },
             { min:0, title:"The Onion Knight · Stannis' Advisor" }],
  ramsay:   [{ min:5, title:"Bastard of Roose Bolton · Lord of Winterfell · Sadist" },
             { min:3, title:"Bastard of Roose Bolton · Sadist" },
             { min:0, title:"Bastard of Bolton" }],
  roose:    [{ min:3, title:"Lord of the Dreadfort · Warden of the North", tag:"Red Wedding Conspirator" },
             { min:0, title:"Lord of the Dreadfort", tag:"Northern Lord" }],
  walder:   [{ min:3, title:"Lord of the Crossing · \"The Late Lord Frey\"", tag:"Red Wedding Host" },
             { min:0, title:"Lord of the Crossing · \"The Late Lord Frey\"", tag:"Lord of the Crossing" }],
  daario:   [{ min:3, title:"Sellsword Captain · Daenerys' Lover" },
             { min:0, title:"Sellsword Captain" }],
  varys:    [{ min:0, title:"\"The Spider\" · Master of Whisperers" }],
  samwell:  [{ min:8, title:"Night's Watch · Maester · Grand Maester to King Bran" },
             { min:5, title:"Night's Watch · Citadel Trainee" },
             { min:0, title:"Night's Watch · Jon's Best Friend" }],
  brienne:  [{ min:8, title:"Ser · Lord Commander of the Kingsguard" },
             { min:4, title:"Sworn Protector · Oathkeeper" },
             { min:2, title:"Warrior · Sworn to Catelyn Stark" },
             { min:0, title:"Warrior · Maid of Tarth" }],
  podrick:  [{ min:8, title:"Ser · Knight of the Kingsguard" },
             { min:2, title:"Squire to Tyrion" },
             { min:0, title:"Squire" }],
  bronn:    [{ min:8, title:"Lord of Highgarden · Master of Coin" },
             { min:0, title:"Sellsword" }],
  // Book / Historical Characters
  bloodraven:[{ min:6, title:"Hand of the King · Three-Eyed Raven" },
              { min:0, title:"Great Bastard of Aegon IV · Hand of the King" }],
  dunk:      [{ min:1, title:"Hedge Knight · Lord Commander of the Kingsguard" },
              { min:0, title:"Hedge Knight" }],
  aegonV:    [{ min:1, title:"King · \"Egg\" · Dunk's Squire" },
              { min:0, title:"Prince · \"Egg\" · Dunk's Squire" }],
  daeronII:  [{ min:1, title:"\"The Good\" · King of Westeros" },
              { min:0, title:"\"The Good\" · King of Westeros" }],
  bittersteel:[{ min:1, title:"Founded the Golden Company · Blackfyre Loyalist" },
               { min:0, title:"Great Bastard of Aegon IV · Warrior" }],
  daemonB:   [{ min:1, title:"Founder of House Blackfyre · Led the First Rebellion" },
              { min:0, title:"Great Bastard of Aegon IV · Warrior" }],
};


// ========== 7. TIERED BIOS ==========
const tieredBios = {
  eddard: [
    { max:0, bio:"Lord of Winterfell and Warden of the North. An honorable man and close friend of King Robert Baratheon.",
      relations:"Wife: Catelyn Tully | Children: Robb, Sansa, Arya, Bran, Rickon | Raised: Jon Snow | Siblings: Benjen, Lyanna, Brandon" }
  ],
  jon: [
    { max:0, bio:"Believed to be Ned Stark's bastard son. Raised at Winterfell alongside the Stark children.",
      relations:"Raised by: Ned Stark | Stark siblings: Robb, Sansa, Arya, Bran, Rickon" },
    { max:7, bio:"Son of Rhaegar Targaryen and Lyanna Stark. True name: Aegon Targaryen. Joined the Night's Watch, was killed and resurrected. Became King in the North and formed an alliance with Daenerys Targaryen.",
      relations:"Birth Parents: Rhaegar Targaryen & Lyanna Stark | Raised by: Ned Stark | Ally/Lover: Daenerys Targaryen | Stark siblings (cousins): Sansa, Arya, Bran" }
  ],
  benjen: [
    { max:0, bio:"Ned Stark's younger brother. A member of the Night's Watch serving as First Ranger.",
      relations:"Brothers: Ned, Brandon (deceased) | Sister: Lyanna (deceased)" },
    { max:5, bio:"Ned's younger brother who joined the Night's Watch. Went missing beyond the Wall on a ranging expedition.",
      relations:"Brothers: Ned, Brandon (deceased) | Sister: Lyanna (deceased) | Nephew: Jon Snow (Night's Watch)" }
  ],
  catelyn: [
    { max:0, bio:"Lady of Winterfell, née Tully. Wife of Eddard Stark and devoted mother to five children.",
      relations:"Husband: Ned Stark | Children: Robb, Sansa, Arya, Bran, Rickon | Father: Hoster Tully | Siblings: Lysa, Edmure" },
    { max:2, bio:"Lady of Winterfell. Fiercely devoted to her family. Captured Tyrion Lannister believing he tried to kill Bran, igniting conflict between the Starks and Lannisters.",
      relations:"Husband: Ned Stark | Children: Robb, Sansa, Arya, Bran, Rickon | Father: Hoster Tully | Siblings: Lysa Arryn, Edmure Tully" }
  ],
  robb: [
    { max:0, bio:"Eldest son of Ned and Catelyn Stark. Heir to Winterfell.",
      relations:"Parents: Ned & Catelyn | Siblings: Sansa, Arya, Bran, Rickon" },
    { max:2, bio:"Eldest Stark son who rallied the North after Ned's execution. Declared King in the North. Won every battle against the Lannisters.",
      relations:"Parents: Ned & Catelyn | Siblings: Sansa, Arya, Bran, Rickon | Ally: Theon Greyjoy" }
  ],
  jaime: [
    { max:0, bio:"Son of Tywin Lannister and twin brother of Cersei. A renowned knight of the Kingsguard, famous for his swordsmanship.",
      relations:"Father: Tywin | Twin: Cersei | Brother: Tyrion" },
    { max:3, bio:"Known as 'Kingslayer' for killing the Mad King Aerys. Has a secret relationship with his twin Cersei. Lost his sword hand after being captured.",
      relations:"Father: Tywin | Twin/Lover: Cersei | Brother: Tyrion | Children (secret): Joffrey, Myrcella, Tommen" },
    { max:7, bio:"Known as 'Kingslayer' for killing the Mad King Aerys. Had a relationship with Cersei. Lost his sword hand, which began his redemption arc. Knighted Brienne of Tarth.",
      relations:"Twin/Lover: Cersei | Brother: Tyrion | Children (secret): Joffrey, Myrcella, Tommen | Father: Tywin" }
  ],
  cersei: [
    { max:0, bio:"Queen of the Seven Kingdoms. Wife of King Robert Baratheon. Fiercely protective of her children.",
      relations:"Husband: Robert Baratheon | Children: Joffrey, Myrcella, Tommen | Father: Tywin | Brothers: Jaime, Tyrion" },
    { max:5, bio:"Queen Regent. Had a secret incestuous relationship with her twin Jaime — her children are Jaime's, not Robert's. Ruthless in protecting her family's power.",
      relations:"Twin/Lover: Jaime | Children (by Jaime): Joffrey, Myrcella, Tommen | Father: Tywin | Brother: Tyrion" },
    { max:7, bio:"Destroyed the Great Sept with wildfire, killing the High Sparrow, Margaery, Loras, and others. Her last son Tommen killed himself in grief. Crowned herself Queen.",
      relations:"Twin/Lover: Jaime | Children (all deceased): Joffrey, Myrcella, Tommen | Brother: Tyrion | Enemy: Daenerys Targaryen" }
  ],
  joffrey: [
    { max:0, bio:"Eldest son and heir to King Robert Baratheon. Crown prince of the Seven Kingdoms.",
      relations:"Father: Robert Baratheon | Mother: Cersei Lannister | Siblings: Myrcella, Tommen" },
    { max:1, bio:"Crowned King after Robert's death. Cruel and sadistic. Ordered the execution of Ned Stark.",
      relations:"Mother: Cersei | Biological Father: Jaime | Official Father: Robert | Siblings: Myrcella, Tommen" },
    { max:3, bio:"Cruel, cowardly king. Born of Cersei and Jaime's incest. Ordered Ned Stark's execution. Betrothed and then married to Margaery Tyrell.",
      relations:"Mother: Cersei | Biological Father: Jaime | Wife: Margaery Tyrell | Siblings: Myrcella, Tommen" }
  ],
  myrcella: [
    { max:0, bio:"Princess of the Seven Kingdoms. Daughter of King Robert and Queen Cersei.",
      relations:"Father: Robert Baratheon | Mother: Cersei Lannister | Siblings: Joffrey, Tommen" },
    { max:4, bio:"Kind and gentle princess. Officially Robert's daughter, actually born of Cersei and Jaime. Sent to Dorne as part of a political alliance arranged by Tyrion.",
      relations:"Mother: Cersei | Biological Father: Jaime | Betrothed: Trystane Martell | Siblings: Joffrey, Tommen" }
  ],
  tommen: [
    { max:0, bio:"Youngest son of King Robert and Queen Cersei. A gentle, good-natured boy.",
      relations:"Father: Robert Baratheon | Mother: Cersei Lannister | Siblings: Joffrey, Myrcella" },
    { max:1, bio:"Youngest son of the royal family. A gentle, good-natured boy. Born of Cersei and Jaime's secret relationship.",
      relations:"Mother: Cersei | Biological Father: Jaime | Siblings: Joffrey, Myrcella" },
    { max:5, bio:"Good-natured but weak-willed young king crowned after Joffrey's death. Married Margaery Tyrell. Easily manipulated by those around him.",
      relations:"Mother: Cersei | Biological Father: Jaime | Wife: Margaery Tyrell | Siblings: Joffrey, Myrcella" }
  ],
  tyrion: [
    { max:0, bio:"The youngest son of Tywin Lannister. Known as 'The Imp' for his small stature. Sharp-witted and well-read.",
      relations:"Father: Tywin | Siblings: Cersei, Jaime" },
    { max:2, bio:"Brilliant, witty dwarf despised by his father and sister. Served as acting Hand of the King during the Battle of the Blackwater.",
      relations:"Father: Tywin | Siblings: Cersei, Jaime" },
    { max:4, bio:"Brilliant, witty dwarf. Served as acting Hand of the King. Accused of murdering Joffrey, demanded trial by combat.",
      relations:"Father: Tywin | Siblings: Cersei, Jaime | Married: Sansa Stark (forced)" },
    { max:7, bio:"Brilliant, witty dwarf. Served as Hand to Joffrey, killed his father Tywin, and fled to Essos. Became Hand to Daenerys Targaryen.",
      relations:"Father: Tywin | Siblings: Cersei, Jaime | Ex-wife: Sansa Stark | Served: Daenerys Targaryen" }
  ],
  bran: [
    { max:0, bio:"The second-youngest son of Ned and Catelyn Stark. A young boy growing up at Winterfell.",
      relations:"Parents: Ned & Catelyn | Siblings: Robb, Sansa, Arya, Rickon" },
    { max:1, bio:"Second-youngest Stark son. Loved climbing the walls of Winterfell.",
      relations:"Parents: Ned & Catelyn | Siblings: Robb, Sansa, Arya, Rickon" },
    { max:5, bio:"Pushed from a tower and crippled. Traveled beyond the Wall seeking the Three-Eyed Raven.",
      relations:"Parents: Ned & Catelyn | Siblings: Robb, Sansa, Arya, Rickon | Protector: Hodor" },
    { max:7, bio:"Became the Three-Eyed Raven after training beyond the Wall. Can see past and present through visions.",
      relations:"Parents: Ned & Catelyn | Siblings: Robb, Sansa, Arya, Rickon | Mentor: Bloodraven" }
  ],
  sansa: [
    { max:0, bio:"Eldest daughter of Ned and Catelyn Stark. A proper young lady who dreams of life at court.",
      relations:"Parents: Ned & Catelyn | Siblings: Robb, Arya, Bran, Rickon" },
    { max:1, bio:"Eldest Stark daughter. A proper young lady betrothed to Prince Joffrey.",
      relations:"Parents: Ned & Catelyn | Betrothed: Joffrey Baratheon | Siblings: Robb, Arya, Bran, Rickon" },
    { max:3, bio:"Eldest Stark daughter. Endured abuse from Joffrey. Escaped King's Landing with Littlefinger's help.",
      relations:"Parents: Ned & Catelyn | Married: Tyrion Lannister (forced) | Siblings: Robb, Arya, Bran, Rickon" },
    { max:5, bio:"Endured abuse from Joffrey, manipulation by Littlefinger, and a forced marriage to Ramsay Bolton. A survivor who learned the game of thrones.",
      relations:"Parents: Ned & Catelyn | Marriages: Tyrion Lannister (annulled), Ramsay Bolton | Siblings: Robb, Arya, Bran, Rickon" },
    { max:7, bio:"Reclaimed Winterfell with Jon Snow in the Battle of the Bastards. Emerged as a shrewd political leader, learning from the best schemers in Westeros. Executed Littlefinger after exposing his treachery.",
      relations:"Parents: Ned & Catelyn (deceased) | Siblings: Arya, Bran | Half-brother/Cousin: Jon Snow" }
  ],
  arya: [
    { max:0, bio:"Youngest daughter of Ned and Catelyn Stark. A spirited tomboy who prefers swordplay to needlework.",
      relations:"Parents: Ned & Catelyn | Siblings: Robb, Sansa, Bran, Rickon" },
    { max:1, bio:"Tomboyish Stark daughter. Spirited and rebellious, she wanted to be a fighter, not a lady.",
      relations:"Parents: Ned & Catelyn | Siblings: Robb, Sansa, Bran, Rickon | Sword teacher: Syrio Forel" },
    { max:4, bio:"After her father's execution, survived on the run across war-torn Westeros. Traveled with The Hound.",
      relations:"Parents: Ned & Catelyn | Companion: The Hound | Siblings: Robb, Sansa, Bran, Rickon" },
    { max:5, bio:"Trained with the Faceless Men in Braavos, learning to change her face. Chose to remain Arya Stark rather than become 'No One'.",
      relations:"Parents: Ned & Catelyn (deceased) | Mentor: Jaqen H'ghar | Siblings: Sansa, Bran, Rickon" },
    { max:7, bio:"Returned to Westeros. Avenged the Red Wedding by killing Walder Frey using a Faceless Man disguise. Reunited with her siblings at Winterfell.",
      relations:"Siblings: Sansa, Bran | Killed: Walder Frey | Companion (former): The Hound" }
  ],
  rickon: [
    { max:0, bio:"The youngest of the Stark children. A small boy growing up at Winterfell.",
      relations:"Parents: Ned & Catelyn | Siblings: Robb, Sansa, Arya, Bran" },
    { max:5, bio:"Youngest Stark child. Separated from his family early in the war. Went into hiding with the wildling woman Osha.",
      relations:"Parents: Ned & Catelyn | Siblings: Robb, Sansa, Arya, Bran | Protector: Osha" }
  ],
  daenerys: [
    { max:0, bio:"The last known heir of House Targaryen. Living in exile across the Narrow Sea with her brother Viserys.",
      relations:"Parents: Aerys & Rhaella | Brother: Viserys" },
    { max:1, bio:"Sold into marriage to Khal Drogo by her brother Viserys. Found strength and hatched three dragons from fire.",
      relations:"Parents: Aerys & Rhaella | Brother: Viserys | Husband: Khal Drogo" },
    { max:5, bio:"Rose from exile to hatch three dragons and conquer Slaver's Bay, freeing thousands of slaves.",
      relations:"Parents: Aerys & Rhaella | Brother: Viserys | Husband: Khal Drogo | Advisor: Jorah Mormont" },
    { max:7, bio:"Last Targaryen heir. Hatched three dragons, conquered Slaver's Bay, and sailed to Westeros to claim the Iron Throne with a massive army.",
      relations:"Parents: Aerys & Rhaella | Brother: Viserys | Advisors: Tyrion, Jorah, Missandei, Varys | Commander: Grey Worm" }
  ],
  theon: [
    { max:2, bio:"Son of Balon Greyjoy, raised as a ward (hostage) at Winterfell by Ned Stark. Grew up alongside the Stark children.",
      relations:"Father: Balon Greyjoy | Sister: Yara | Raised by: Ned Stark | Foster brother: Robb Stark" },
    { max:5, bio:"Ironborn prince raised at Winterfell. Betrayed Robb Stark by seizing Winterfell. Captured and tortured by Ramsay Bolton, who broke him into 'Reek'.",
      relations:"Father: Balon | Sister: Yara | Captor: Ramsay Bolton" },
    { max:7, bio:"Redeemed himself by helping Sansa escape Winterfell. Returned to the Iron Islands and helped Yara. Joined Jon Snow's mission beyond the Wall.",
      relations:"Father: Balon (deceased) | Sister: Yara | Freed from: Ramsay Bolton | Ally: Sansa Stark" }
  ],
  littlefinger: [
    { max:0, bio:"A clever, ambitious man of humble origins who rose to become Master of Coin on the Small Council.",
      relations:"Office: Master of Coin | Childhood friend: Catelyn Tully" },
    { max:3, bio:"Master of Coin and cunning schemer. Grew up with Catelyn and Lysa Tully, and secretly loved Catelyn. Orchestrated the chaos that led to the War of the Five Kings.",
      relations:"Childhood friend: Catelyn Tully | Office: Master of Coin" },
    { max:6, bio:"One of the most dangerous schemers in Westeros. Murdered Lysa Arryn to gain control of the Vale. Manipulated Sansa Stark and conspired to set the Starks against each other.",
      relations:"Murdered: Lysa Arryn | Manipulated: Sansa, Robin Arryn | Office: Master of Coin, Lord of the Vale" }
  ],
  samwell: [
    { max:0, bio:"A self-described coward from House Tarly. Sent to the Night's Watch by his father.",
      relations:"Night's Watch | Best friend: Jon Snow" },
    { max:4, bio:"Jon Snow's best friend in the Night's Watch. A self-described coward who proved brave when it mattered. Became the first person in thousands of years to kill a White Walker.",
      relations:"Best friend: Jon Snow | Partner: Gilly | Night's Watch" },
    { max:7, bio:"Jon Snow's best friend. Trained at the Citadel. Discovered critical information about Jon's true parentage and the history of dragonglass.",
      relations:"Best friend: Jon Snow | Partner: Gilly | Mentor: Maester Aemon" }
  ],
  davos: [
    { max:0, bio:"A former smuggler known as the Onion Knight. Loyal advisor to Stannis Baratheon.",
      relations:"King: Stannis Baratheon" },
    { max:4, bio:"A former smuggler knighted by Stannis Baratheon. Known as the Onion Knight. Stannis' most loyal and honest advisor.",
      relations:"King: Stannis Baratheon | Rival: Melisandre" },
    { max:6, bio:"The Onion Knight. After Stannis' fall, became one of Jon Snow's most trusted advisors and helped rally support for the Battle of the Bastards.",
      relations:"Formerly served: Stannis | Now serves: Jon Snow" },
    { max:7, bio:"The Onion Knight. Jon Snow's loyal advisor. Helped rally the North against the White Walker threat.",
      relations:"Serves: Jon Snow | Previously: Stannis Baratheon" }
  ],
  melisandre: [
    { max:0, bio:"A mysterious Red Priestess from Asshai who serves the Lord of Light. Advisor to Stannis Baratheon.",
      relations:"Serves: Stannis Baratheon | God: R'hllor (Lord of Light)" },
    { max:4, bio:"A Red Priestess of R'hllor who attached herself to Stannis Baratheon. Wielded mysterious powers including shadow magic and blood magic.",
      relations:"Serves: Stannis Baratheon | God: R'hllor (Lord of Light)" },
    { max:5, bio:"Convinced Stannis to sacrifice his daughter Shireen. Her faith in Stannis as the chosen one proved misplaced.",
      relations:"Served: Stannis Baratheon | God: R'hllor (Lord of Light)" },
    { max:7, bio:"Resurrected Jon Snow from the dead. Abandoned Stannis' cause after his defeat. Joined the fight against the White Walkers, believing Jon may be the prophesied hero.",
      relations:"Resurrected: Jon Snow | God: R'hllor (Lord of Light) | Previously served: Stannis" }
  ],
  brienne: [
    { max:0, bio:"A tall, fierce warrior woman from the island of Tarth. Skilled with a sword and driven by honor.",
      relations:"House: Tarth" },
    { max:1, bio:"A tall, fierce warrior woman of noble birth. Mocked for being a woman in armor but formidable in combat.",
      relations:"House: Tarth" },
    { max:3, bio:"Served Renly Baratheon until his death, then swore her sword to Catelyn Stark.",
      relations:"Served: Renly Baratheon, Catelyn Stark | Companion: Podrick Payne" },
    { max:5, bio:"After swearing to protect the Stark girls, searched for Sansa and Arya across Westeros.",
      relations:"Served: Catelyn Stark | Squire: Podrick Payne | Respect: Jaime Lannister" },
    { max:7, bio:"Found and protected Sansa. Trained Podrick Payne. Fought in the Battle of the Bastards.",
      relations:"Sworn to: Sansa Stark | Squire: Podrick Payne | Respect: Jaime Lannister" }
  ],
  jorah: [
    { max:0, bio:"An exiled knight from Bear Island who has pledged himself to Daenerys Targaryen.",
      relations:"Serves: Daenerys Targaryen | House: Mormont" },
    { max:4, bio:"An exiled northern lord who pledged himself to Daenerys. Originally spied on her for Robert but fell deeply in love and became her most devoted protector.",
      relations:"Serves: Daenerys Targaryen | Originally from: Bear Island (House Mormont)" },
    { max:7, bio:"Daenerys' most devoted protector. Was exiled from her service after his spying was revealed. Contracted greyscale but was cured by Samwell Tarly. Returned to Daenerys' side.",
      relations:"Serves: Daenerys Targaryen | Cured by: Samwell Tarly | From: Bear Island" }
  ],
  missandei: [
    { max:0, bio:"A young woman from the island of Naath, skilled in many languages.",
      relations:"From: Naath" },
    { max:3, bio:"A former slave from the island of Naath who served as a translator in Astapor. Freed by Daenerys and became her closest friend and most trusted advisor.",
      relations:"Serves: Daenerys Targaryen" },
    { max:5, bio:"Daenerys' closest friend and most trusted advisor. Fell in love with Grey Worm.",
      relations:"Serves: Daenerys Targaryen | Lover: Grey Worm" },
    { max:7, bio:"Daenerys' most trusted advisor and closest friend. Traveled with Daenerys to Westeros to help claim the Iron Throne. In a loving relationship with Grey Worm.",
      relations:"Serves: Daenerys Targaryen | Lover: Grey Worm" }
  ],
  greyworm: [
    { max:0, bio:"An elite Unsullied warrior.",
      relations:"Unsullied" },
    { max:3, bio:"Commander of the Unsullied, the elite warrior-eunuchs. Freed by Daenerys in Astapor and pledged his army to her cause.",
      relations:"Serves: Daenerys Targaryen" },
    { max:5, bio:"Commander of the Unsullied. Fell in love with Missandei despite being a eunuch.",
      relations:"Serves: Daenerys Targaryen | Lover: Missandei" },
    { max:7, bio:"Commander of the Unsullied. Traveled with Daenerys to Westeros. A fierce warrior and loyal commander, devoted to both his queen and Missandei.",
      relations:"Serves: Daenerys Targaryen | Lover: Missandei" }
  ],
  varys: [
    { max:0, bio:"A eunuch spymaster who serves on the Small Council. Known as 'The Spider' for his vast network of informants.",
      relations:"Office: Master of Whisperers" },
    { max:5, bio:"The Master of Whisperers, a eunuch spymaster who controls an extensive network of informants. Claims to serve 'the realm' above all else.",
      relations:"Office: Master of Whisperers | Ally: Tyrion Lannister" },
    { max:7, bio:"Fled Westeros after helping Tyrion escape. Became one of Daenerys' key advisors, helping broker alliances. Brought Tyrion to Daenerys' side.",
      relations:"Serves: Daenerys Targaryen | Ally: Tyrion Lannister | Office: Master of Whisperers" }
  ],
  olenna: [
    { max:0, bio:"The formidable matriarch of House Tyrell, known as the 'Queen of Thorns' for her sharp tongue and shrewd mind.",
      relations:"House: Tyrell | Son: Mace Tyrell" },
    { max:3, bio:"The sharp-tongued matriarch of House Tyrell, known as the 'Queen of Thorns'. One of the most cunning political minds in Westeros.",
      relations:"Son: Mace Tyrell | Grandchildren: Margaery, Loras" },
    { max:6, bio:"Outlived her son Mace and grandchildren Margaery and Loras when Cersei destroyed the Great Sept. Sought revenge through an alliance with Daenerys Targaryen.",
      relations:"Son: Mace (deceased) | Grandchildren: Margaery, Loras (deceased) | Allied with: Daenerys" }
  ],
  oberyn: [
    { max:0, bio:"Doran Martell's younger brother, known as 'The Red Viper'. A charismatic warrior and prince of Dorne.",
      relations:"Brother: Doran Martell | Paramour: Ellaria Sand | Sister: Elia Martell" },
    { max:3, bio:"Known as 'The Red Viper'. A legendary warrior and prince of Dorne. Charismatic and worldly, traveled extensively in Essos. Came to King's Landing seeking vengeance for his sister Elia's murder.",
      relations:"Brother: Doran Martell | Paramour: Ellaria Sand | Sister: Elia Martell (murdered)" }
  ],
  ramsay: [
    { max:0, bio:"A cruel young man from the North.",
      relations:"Father: Roose Bolton" },
    { max:3, bio:"The sadistic bastard son of Roose Bolton. Known for his cruelty and love of torture.",
      relations:"Father: Roose Bolton" },
    { max:5, bio:"Legitimized as a Bolton by King Tommen. Married Sansa Stark by force and brutalized her. Flayed his enemies alive and hunted people for sport.",
      relations:"Father: Roose Bolton | Wife: Sansa Stark (forced) | Prisoner: Theon Greyjoy" }
  ],
  roose: [
    { max:2, bio:"Lord of the Dreadfort and head of House Bolton. A cold, calculating northern lord.",
      relations:"House: Bolton | Son: Ramsay (bastard)" },
    { max:5, bio:"Betrayed Robb Stark at the Red Wedding, personally killing him. Named Warden of the North by the Lannisters. A cold, calculating strategist.",
      relations:"Son: Ramsay (legitimized) | Betrayed: Robb Stark | Office: Warden of the North" }
  ],
  gendry: [
    { max:1, bio:"A skilled blacksmith's apprentice in King's Landing. Unaware of his true parentage.",
      relations:"Works: Street of Steel, King's Landing" },
    { max:3, bio:"Robert Baratheon's bastard son, unaware of his parentage at first. A skilled blacksmith. Fled King's Landing with the Night's Watch recruits after Cersei began killing Robert's bastards.",
      relations:"Father: Robert Baratheon (deceased) | Traveling companion: Arya Stark" },
    { max:7, bio:"Robert's only surviving bastard. Was hidden for years, working as a blacksmith. Recruited by Davos for his smithing skills, particularly with dragonglass.",
      relations:"Father: Robert Baratheon (deceased) | Ally: Davos Seaworth | Friend: Arya Stark" }
  ],
  stannis: [
    { max:0, bio:"Robert's middle brother. Lord of Dragonstone. A rigid, stern military commander with an iron sense of duty and justice.",
      relations:"Brothers: Robert, Renly | Wife: Selyse | Daughter: Shireen" },
    { max:2, bio:"Claimed the Iron Throne after Robert's death, believing himself the rightful heir. Guided by the Red Priestess Melisandre. Defeated at the Battle of the Blackwater.",
      relations:"Brothers: Robert (deceased), Renly (deceased) | Wife: Selyse | Daughter: Shireen | Advisor: Davos Seaworth | Priestess: Melisandre" },
    { max:4, bio:"Would-be king who suffered defeat at the Blackwater. Retreated to Dragonstone. Went north to help the Night's Watch against the wildling attack on Castle Black.",
      relations:"Wife: Selyse | Daughter: Shireen | Advisor: Davos | Priestess: Melisandre" }
  ],
  renly: [
    { max:0, bio:"The youngest Baratheon brother. Lord of Storm's End. Charismatic and popular, a contrast to his stern brother Stannis.",
      relations:"Brothers: Robert, Stannis" },
    { max:1, bio:"Youngest Baratheon brother. Declared himself king after Robert's death, claiming the throne despite Stannis having the stronger legal claim. Backed by the wealth of the Tyrells through his marriage to Margaery.",
      relations:"Brothers: Robert (deceased), Stannis | Wife: Margaery Tyrell | Lover: Loras Tyrell" }
  ],
  selyse: [
    { max:0, bio:"Wife of Stannis Baratheon. A stern, fanatical follower of the Lord of Light.",
      relations:"Husband: Stannis | Daughter: Shireen" },
    { max:4, bio:"Stannis' wife, a devout convert to the faith of R\'hllor. Kept the remains of stillborn children in jars. Deeply loyal to Melisandre.",
      relations:"Husband: Stannis | Daughter: Shireen | Faith: R\'hllor" }
  ],
  shireen: [
    { max:0, bio:"Stannis and Selyse's young daughter. Disfigured by greyscale as a baby but survived. A kind, intelligent girl who taught Davos to read.",
      relations:"Father: Stannis | Mother: Selyse | Friend: Davos Seaworth" },
    { max:4, bio:"Stannis' only child. Survived greyscale which left her face scarred. A sweet, bookish girl who befriended Davos and taught him to read. Traveled north with Stannis' army.",
      relations:"Father: Stannis | Mother: Selyse | Friend: Davos Seaworth" }
  ],
  hound: [
    { max:0, bio:"Sandor Clegane, a fearsome warrior scarred by terrible burns. Serves as a bodyguard.",
      relations:"Brother: Gregor 'The Mountain' Clegane" },
    { max:3, bio:"Joffrey's personal bodyguard. A fearsome warrior scarred by burns inflicted by his brother The Mountain. Despite his brutality, shows unexpected compassion.",
      relations:"Brother: Gregor 'The Mountain' Clegane | Served: Joffrey Baratheon" },
    { max:5, bio:"Left to die by Arya after a fight with Brienne. Found and nursed back to health by a peaceful community. Returned from his near-death a changed man.",
      relations:"Enemy: Gregor 'The Mountain' Clegane | Former companion: Arya Stark" },
    { max:7, bio:"Joined the Brotherhood Without Banners. Later joined Jon Snow's expedition beyond the Wall to capture a wight. Determined to confront his undead brother The Mountain.",
      relations:"Ally: Jon Snow, Brotherhood Without Banners | Enemy: The Mountain" }
  ],
  ellaria: [
    { max:0, bio:"The paramour of Prince Oberyn Martell of Dorne.",
      relations:"Lover: Oberyn Martell" },
    { max:4, bio:"Oberyn Martell's paramour and mother of several Sand Snakes. Passionate and fiery.",
      relations:"Lover: Oberyn Martell" },
    { max:7, bio:"Oberyn's paramour. After Oberyn's death, led the Sand Snakes in a coup against Dorne's rulers. Captured by Euron Greyjoy and imprisoned by Cersei.",
      relations:"Lover: Oberyn Martell | Enemy: Cersei Lannister" }
  ],
  walder: [
    { max:0, bio:"The ancient lord of the Twins, a strategically important river crossing. Known for his many wives and many children.",
      relations:"House: Frey | Seat: The Twins" },
    { max:2, bio:"The ancient, lecherous lord of the Twins. Known for his many wives, many children, and his unreliability — earning the nickname 'The Late Lord Frey'.",
      relations:"House: Frey | Seat: The Twins" },
    { max:5, bio:"Betrayed guest right by hosting the Red Wedding, where Robb Stark, Catelyn Stark, and their bannermen were murdered. Earned lasting infamy.",
      relations:"House: Frey | Allied with: Roose Bolton, Tywin Lannister | Seat: The Twins" }
  ],
  nightking: [
    { max:0, bio:"A mysterious and ancient threat from beyond the Wall.",
      relations:"Enemy: The living" },
    { max:6, bio:"The ancient leader of the White Walkers. Created by the Children of the Forest thousands of years ago as a weapon against the First Men.",
      relations:"Created by: Children of the Forest | Enemy: All living things" },
    { max:7, bio:"Led the army of the dead south. Destroyed the Wall using an undead dragon. Posed the greatest threat the living world had ever faced.",
      relations:"Created by: Children of the Forest | Dragon: Viserion (undead) | Enemy: Jon Snow, Daenerys Targaryen" }
  ],
  tywin: [
    { max:0, bio:"Lord of Casterly Rock, Warden of the West, and the richest man in Westeros. The fearsome patriarch of House Lannister.",
      relations:"Children: Cersei, Jaime (twins), Tyrion | Brother: Kevan" },
    { max:3, bio:"The most powerful man in Westeros. Served as Hand of the King. A brilliant strategist who orchestrated the defeat of the Starks. Rules through fear and gold.",
      relations:"Children: Cersei, Jaime (twins), Tyrion | Brother: Kevan | Grandchildren: Joffrey, Myrcella, Tommen" }
  ],
  kevan: [
    { max:0, bio:"Tywin Lannister's loyal younger brother. A steady, reliable military commander.",
      relations:"Brother: Tywin | Son: Lancel | Niece/Nephews: Cersei, Jaime, Tyrion" },
    { max:5, bio:"Tywin's brother who served as a trusted lieutenant. After Tywin's death and Cersei's disgrace, was appointed Hand of the King to restore order.",
      relations:"Brother: Tywin (deceased) | Son: Lancel | Served: King Tommen" }
  ],
  highsparrow: [
    { max:0, bio:"Leader of a religious movement called the Sparrows. A humble, barefoot preacher who advocates for the poor and devout.",
      relations:"Faith: The Faith of the Seven" },
    { max:5, bio:"Rose to become the High Septon through Cersei's support. Turned the Faith Militant into a powerful force. Imprisoned Cersei and Margaery for their sins, forcing Cersei to perform a public walk of shame.",
      relations:"Faith: The Faith of the Seven | Imprisoned: Cersei Lannister, Margaery Tyrell, Loras Tyrell" }
  ],
  daario: [
    { max:0, bio:"A flamboyant sellsword captain from the Free Cities.",
      relations:"Sellsword company: Second Sons" },
    { max:5, bio:"Captain of the Second Sons who betrayed his commanders to side with Daenerys. Became her lover and one of her most capable military commanders in Meereen.",
      relations:"Lover: Daenerys Targaryen | Company: Second Sons" }
  ],
  jaqen: [
    { max:0, bio:"A mysterious prisoner from the Free Cities with the ability to change his face.",
      relations:"Organization: Faceless Men" },
    { max:5, bio:"A Faceless Man from Braavos. First encountered by Arya as a prisoner. Granted Arya three deaths as repayment for saving his life. Later trained Arya in the House of Black and White.",
      relations:"Student: Arya Stark | Organization: Faceless Men | Location: House of Black and White, Braavos" }
  ],
  doran: [
    { max:0, bio:"Prince of Dorne and head of House Martell. A cautious, patient ruler confined to a wheelchair by gout.",
      relations:"Brother: Oberyn | Son: Trystane | Sister: Elia (deceased)" },
    { max:5, bio:"Ruled Dorne with patience and restraint, preferring diplomacy over war despite his family's thirst for vengeance over Elia's murder. Sent Trystane to King's Landing as part of an alliance.",
      relations:"Brother: Oberyn (deceased) | Son: Trystane | Rival: Ellaria Sand" }
  ],
  trystane: [
    { max:0, bio:"Prince of Dorne. Son of Doran Martell. A gentle and kind young prince.",
      relations:"Father: Doran | Uncle: Oberyn" },
    { max:5, bio:"Doran's son and heir. Betrothed to Myrcella Baratheon as part of a political alliance between the crown and Dorne.",
      relations:"Father: Doran | Betrothed: Myrcella Baratheon | Uncle: Oberyn (deceased)" }
  ],
  hoster: [
    { max:0, bio:"Lord of Riverrun and head of House Tully. Father of Catelyn, Lysa, and Edmure. An aging lord in declining health.",
      relations:"Children: Catelyn, Lysa, Edmure | Brother: Brynden 'The Blackfish'" },
    { max:2, bio:"Lord of Riverrun. Married his daughters Catelyn and Lysa to Ned Stark and Jon Arryn to secure alliances during Robert's Rebellion. Died of old age during the War of the Five Kings.",
      relations:"Children: Catelyn Stark, Lysa Arryn, Edmure | Brother: Brynden 'The Blackfish'" }
  ],
  edmure: [
    { max:0, bio:"Son of Hoster Tully and heir to Riverrun. A well-meaning but sometimes hapless young lord.",
      relations:"Father: Hoster | Sisters: Catelyn, Lysa | Uncle: Brynden 'The Blackfish'" },
    { max:3, bio:"Inherited Riverrun after Hoster's death. Married a Frey girl as part of a pact — the same wedding where Robb and Catelyn were murdered.",
      relations:"Father: Hoster (deceased) | Sisters: Catelyn (deceased), Lysa" },
    { max:7, bio:"Held prisoner by the Freys and later the Lannisters after the Red Wedding. Eventually freed when Arya killed the Freys.",
      relations:"Sisters: Catelyn (deceased), Lysa (deceased) | Uncle: Blackfish (deceased)" }
  ],
  lysa: [
    { max:0, bio:"Catelyn's sister. Lady of the Eyrie through her marriage to Jon Arryn. An anxious, overprotective mother.",
      relations:"Husband: Jon Arryn (deceased) | Son: Robin | Sister: Catelyn | Brother: Edmure" },
    { max:3, bio:"Ruled the Eyrie after Jon Arryn's death. Refused to commit the Vale's forces to any side in the war. Obsessed with protecting her sickly son Robin.",
      relations:"Son: Robin Arryn | Sister: Catelyn | Brother: Edmure | Late Husband: Jon Arryn" }
  ],
  robin: [
    { max:0, bio:"Son of Jon and Lysa Arryn. Lord of the Eyrie. A sickly, spoiled boy still breastfed at an older age.",
      relations:"Mother: Lysa | Father: Jon Arryn (deceased)" },
    { max:5, bio:"Young Lord of the Eyrie. After his mother's death, fell under the influence of Petyr Baelish, who served as Lord Protector of the Vale.",
      relations:"Mother: Lysa (deceased) | Guardian: Petyr 'Littlefinger' Baelish | Father: Jon Arryn (deceased)" }
  ],
  blackfish: [
    { max:0, bio:"Brynden Tully, called 'The Blackfish'. Hoster's brother. A legendary knight and military commander. Never married, which caused a rift with his brother.",
      relations:"Brother: Hoster | Nieces: Catelyn, Lysa | Nephew: Edmure" },
    { max:5, bio:"Served as a commander during the War of the Five Kings. After the Red Wedding, retreated to Riverrun and held it against the Freys and Lannisters.",
      relations:"Brother: Hoster (deceased) | Nieces: Catelyn (deceased), Lysa (deceased) | Nephew: Edmure (prisoner)" }
  ],
  // Book / Historical Characters
  dunk: [
    { max:0, bio:"A towering hedge knight of humble origins. Protagonist of A Knight of the Seven Kingdoms. Took young Prince Aegon 'Egg' Targaryen as his squire and traveled Westeros having adventures.",
      relations:"Squire: Aegon V 'Egg' Targaryen" }
  ],
  aegonV: [
    { max:0, bio:"Fourth son of a fourth son, he was never expected to rule — hence 'The Unlikely.' As a boy called 'Egg,' he served as squire to the hedge knight Ser Duncan the Tall, traveling Westeros and learning the lives of common people.",
      relations:"Father: Maekar I | Squire to: Ser Duncan the Tall | Brother: Maester Aemon" }
  ],
  baelorB: [
    { max:0, bio:"Beloved crown prince and son of Daeron II. Half-Dornish in appearance with dark hair, breaking the traditional Targaryen look. The hero of The Hedge Knight — he championed Dunk in the trial by seven at Ashford Meadow.",
      relations:"Father: Daeron II | Brother: Maekar" }
  ],
  maekar: [
    { max:0, bio:"Fourth son of Daeron II. A fierce, stern warrior prince. Father of Aerion Brightflame, Daeron the Drunken, Maester Aemon, and Aegon V (Egg).",
      relations:"Father: Daeron II | Brother: Baelor Breakspear | Sons: Aerion, Daeron, Aemon, Aegon V" }
  ],
  aerion: [
    { max:0, bio:"Cruel, vain, and possibly mad prince. Eldest surviving son of Maekar I. The primary antagonist of The Hedge Knight — he attacked a puppet show and brutalized the puppeteer, prompting Dunk to strike a prince and trigger the trial by seven.",
      relations:"Father: Maekar I | Brothers: Daeron, Aemon, Aegon V" }
  ],
  daemonB: [
    { max:0, bio:"The most famous of Aegon IV's Great Bastards. Given the Valyrian steel sword Blackfyre — the sword of Targaryen kings — by his father, which many saw as a sign of legitimacy. A legendary warrior who led the First Blackfyre Rebellion.",
      relations:"Father: Aegon IV (bastard) | Half-brothers: Bloodraven, Bittersteel | Half-sister: Shiera Seastar" }
  ],
  bittersteel: [
    { max:0, bio:"One of Aegon IV's Great Bastards, half-brother and bitter rival of Bloodraven. Supported Daemon Blackfyre's claim to the throne.",
      relations:"Father: Aegon IV (bastard) | Half-brothers: Daemon Blackfyre, Bloodraven | Half-sister: Shiera Seastar" },
    { max:7, bio:"Supported Daemon Blackfyre's claim. After the rebellion failed, fled to Essos and founded the Golden Company — a famous mercenary company made of exiled Westerosi.",
      relations:"Father: Aegon IV (bastard) | Half-brothers: Daemon Blackfyre, Bloodraven | Founded: The Golden Company" }
  ],
  daemonBII: [
    { max:0, bio:"Son of Daemon I Blackfyre. Unlike his warrior father, he was a dreamer who had prophetic dragon dreams. Central figure in The Mystery Knight, the third Dunk & Egg novella.",
      relations:"Father: Daemon Blackfyre | House: Blackfyre (pretender)" }
  ],
  mountain: [
    { max:0, bio:"Gregor Clegane, the tallest and strongest man in Westeros. A brutally violent knight in service to the Lannisters.",
      relations:"Brother: Sandor 'The Hound' Clegane | Serves: House Lannister" },
    { max:4, bio:"Cersei's champion in Tyrion's trial by combat. Killed Oberyn Martell in a horrific duel, though Oberyn nearly killed him in turn.",
      relations:"Serves: House Lannister | Killed: Oberyn Martell | Brother: The Hound" },
    { max:7, bio:"Mortally wounded by Oberyn's poisoned spear but resurrected by Qyburn as an undead, silent bodyguard for Cersei. Now barely human.",
      relations:"Serves: Cersei Lannister | Created by: Qyburn | Brother: The Hound" }
  ],
  podrick: [
    { max:0, bio:"A shy, loyal young squire from a minor noble house.",
      relations:"Squire to: Tyrion Lannister" },
    { max:3, bio:"Tyrion Lannister's faithful squire. Saved Tyrion's life during the Battle of the Blackwater. Known for being loyal, earnest, and surprisingly popular.",
      relations:"Squire to: Tyrion Lannister" },
    { max:7, bio:"After Tyrion's exile, became squire to Brienne of Tarth. Trained as a warrior under her guidance and proved himself in battle.",
      relations:"Squire to: Brienne of Tarth | Previously: Tyrion Lannister" }
  ],
  bronn: [
    { max:0, bio:"A skilled sellsword with a sharp wit and flexible morals. Fights for whoever pays the most.",
      relations:"Sellsword" },
    { max:4, bio:"Won Tyrion's freedom by serving as his champion in a trial by combat at the Eyrie. Became Tyrion's close companion and bodyguard.",
      relations:"Employer: Tyrion Lannister" },
    { max:7, bio:"Served both Tyrion and Jaime Lannister over the years. A pragmatic survivor who always looks out for himself but proved genuinely loyal when it mattered.",
      relations:"Allies: Tyrion Lannister, Jaime Lannister" }
  ],
  qyburn: [
    { max:0, bio:"A former maester stripped of his chain for conducting unethical experiments. A brilliant but amoral scientist.",
      relations:"Formerly: The Citadel" },
    { max:5, bio:"Took over as Cersei's advisor after the fall of previous allies. Reanimated Gregor Clegane through dark science. Named Master of Whisperers.",
      relations:"Serves: Cersei Lannister | Created: The reanimated Mountain" },
    { max:7, bio:"Cersei's most loyal follower. Served as her Hand of the Queen. Developed weapons and conducted dark experiments in her service.",
      relations:"Serves: Cersei Lannister | Office: Hand of the Queen" }
  ],
  ygritte: [
    { max:0, bio:"A wildling woman living beyond the Wall. Fierce, independent, and skilled with a bow.", relations:"People: Free Folk (wildlings)" },
    { max:3, bio:"A wildling spearwife who captured Jon Snow beyond the Wall. They fell in love despite being on opposite sides. Famous for telling Jon 'You know nothing.'", relations:"Lover: Jon Snow | People: Free Folk" }
  ],
  hodor: [
    { max:0, bio:"A simple-minded but gentle giant who serves House Stark at Winterfell. Can only say the word 'Hodor'.", relations:"Serves: House Stark | Carries: Bran Stark" },
    { max:5, bio:"Bran Stark's loyal protector. Carried Bran on his back after Bran was crippled. Traveled with Bran beyond the Wall to find the Three-Eyed Raven.", relations:"Protects: Bran Stark | Companions: Meera Reed, Jojen Reed" }
  ],
  gilly: [
    { max:0, bio:"A young wildling woman, one of Craster's daughter-wives. Lives in squalor beyond the Wall.", relations:"Father/Husband: Craster" },
    { max:4, bio:"Rescued by Samwell Tarly from Craster's Keep. A brave young mother who traveled to Castle Black and then south with Sam.", relations:"Partner: Samwell Tarly | Son: Little Sam" },
    { max:7, bio:"Sam's devoted partner. Helped Sam discover critical information at the Citadel, including Jon Snow's true parentage in an old book.", relations:"Partner: Samwell Tarly | Son: Little Sam" }
  ],
  tormund: [
    { max:0, bio:"A wildling leader and warrior known for his booming laugh and wild red beard.", relations:"People: Free Folk" },
    { max:4, bio:"A fierce Free Folk raider. Led wildling attacks south of the Wall. A natural leader among the Free Folk.", relations:"People: Free Folk | Companion: Ygritte" },
    { max:7, bio:"Became one of Jon Snow's closest allies. Fought beside Jon at the Battle of the Bastards and against the White Walkers. Has an unrequited fascination with Brienne of Tarth.", relations:"Ally: Jon Snow | People: Free Folk | Admires: Brienne of Tarth" }
  ],
  aemonT: [
    { max:0, bio:"Maester of the Night's Watch at Castle Black. A blind, elderly man who is secretly a Targaryen — Aemon Targaryen, son of King Maekar I. Chose duty to the Watch over the crown.", relations:"House: Targaryen (secret) | Serves: Night's Watch | Brother: Aegon V 'Egg'" },
    { max:4, bio:"The oldest man in Westeros. A wise mentor to Jon Snow and Samwell Tarly. Revealed his Targaryen identity. Mourned when he learned of Daenerys, the last of his family, across the sea.", relations:"House: Targaryen | Brother: Aegon V | Mentored: Jon Snow, Samwell Tarly" }
  ],
  pycelle: [
    { max:0, bio:"Grand Maester of the Seven Kingdoms, serving on the Small Council. An elderly man who appears frail but may be more cunning than he seems.", relations:"Serves: The Crown | Office: Grand Maester" },
    { max:5, bio:"Long-serving Grand Maester, secretly loyal to the Lannisters above all. Tyrion exposed his scheming and briefly had him imprisoned.", relations:"Loyal to: House Lannister | Office: Grand Maester" }
  ],
  rhaegar: [
    { max:0, bio:"Crown Prince of the Seven Kingdoms. Son of the Mad King Aerys II. A skilled warrior and harpist, beloved by the common people.",
      relations:"Parents: Aerys & Rhaella | Siblings: Viserys, Daenerys | Wife: Elia Martell" },
    { max:6, bio:"Crown Prince killed by Robert Baratheon at the Battle of the Trident during Robert's Rebellion. His alleged kidnapping of Lyanna Stark sparked the war.",
      relations:"Parents: Aerys & Rhaella | Wife: Elia Martell | Children: Rhaenys, Aegon (killed) | Siblings: Viserys, Daenerys" }
  ],
  viserys: [
    { max:0, bio:"Daenerys' older brother. A cruel, entitled prince who believes the Iron Throne is rightfully his. Living in exile across the Narrow Sea.",
      relations:"Sister: Daenerys | Parents: Aerys & Rhaella | Brother: Rhaegar (deceased)" }
  ],
  robert: [
    { max:0, bio:"King of the Seven Kingdoms. Won the throne by conquest during Robert's Rebellion. A great warrior in his youth, now grown fat and fond of drink.",
      relations:"Wife: Cersei Lannister | Brothers: Stannis, Renly | Best Friend: Ned Stark" }
  ],
  drogo: [
    { max:0, bio:"A powerful Dothraki warlord. Khal of the largest khalasar on the Dothraki sea.",
      relations:"Wife: Daenerys Targaryen" }
  ],
  lyanna: [
    { max:0, bio:"Ned Stark's sister. A fierce, beautiful woman known as 'The Wolf Maid'. Her alleged kidnapping by Prince Rhaegar Targaryen sparked Robert's Rebellion.",
      relations:"Brothers: Ned, Benjen, Brandon | Betrothed: Robert Baratheon" },
    { max:6, bio:"Ned's beloved sister. Her disappearance with Rhaegar Targaryen was the catalyst for Robert's Rebellion. Died under mysterious circumstances.",
      relations:"Brothers: Ned, Benjen, Brandon (deceased) | Took by/eloped with: Rhaegar Targaryen" }
  ],
  elia: [
    { max:0, bio:"Princess of Dorne and wife of Prince Rhaegar Targaryen. Murdered along with her children during the Sack of King's Landing.",
      relations:"Husband: Rhaegar Targaryen | Brothers: Doran, Oberyn Martell" },
    { max:6, bio:"Dornish princess married to Rhaegar. Murdered by Gregor Clegane during the fall of King's Landing. Her death fueled Dornish hatred of the Lannisters.",
      relations:"Husband: Rhaegar | Brothers: Doran, Oberyn | Children: Rhaenys, Aegon (killed)" }
  ],
  balon: [
    { max:0, bio:"Lord of the Iron Islands and head of House Greyjoy. A proud, stubborn ruler who once rebelled against Robert Baratheon.",
      relations:"Children: Yara, Theon | Brother: Euron" },
    { max:5, bio:"Lord of the Iron Islands. Launched a second rebellion during the War of the Five Kings, seizing parts of the North. Disowned Theon for being too 'mainland.'",
      relations:"Children: Yara, Theon | Brother: Euron | Enemy: The North" }
  ],
  yara: [
    { max:0, bio:"Balon Greyjoy's daughter. A fierce Ironborn captain and skilled warrior.",
      relations:"Father: Balon | Brother: Theon" },
    { max:5, bio:"Balon's eldest child and a proven ship captain. Led Ironborn raids and attempted to rescue Theon from Ramsay Bolton.",
      relations:"Father: Balon | Brother: Theon" },
    { max:7, bio:"Escaped Euron's ambush with Theon's help. Allied with Daenerys Targaryen in exchange for Ironborn independence. A fierce and loyal commander.",
      relations:"Father: Balon (deceased) | Brother: Theon | Uncle/Enemy: Euron | Allied with: Daenerys Targaryen" }
  ],
  euron: [
    { max:0, bio:"Balon Greyjoy's younger brother. A feared pirate captain who sailed the world.",
      relations:"Brother: Balon | Niece: Yara | Nephew: Theon" },
    { max:7, bio:"Killed his brother Balon and seized the Salt Throne. A mad, unpredictable pirate king who allied with Cersei Lannister. Captured Yara and destroyed part of Daenerys' fleet.",
      relations:"Brother: Balon (murdered) | Allied with: Cersei Lannister | Enemy: Yara, Theon" }
  ],
  margaery: [
    { max:0, bio:"The beautiful and ambitious daughter of House Tyrell, one of the wealthiest families in Westeros.",
      relations:"Grandmother: Olenna | Father: Mace | Brother: Loras" },
    { max:2, bio:"Married Renly Baratheon as part of the Tyrell bid for power. After Renly's death, the Tyrells sought a new alliance with the crown.",
      relations:"Grandmother: Olenna | Husband: Renly (deceased) | Brother: Loras" },
    { max:5, bio:"A shrewd political player who married three kings — Renly, Joffrey, and Tommen. Won the love of the common people through charity and charm.",
      relations:"Grandmother: Olenna | Marriages: Renly, Joffrey, Tommen | Brother: Loras" }
  ],
  loras: [
    { max:0, bio:"The Knight of Flowers. Third son of Mace Tyrell. One of the finest swords in Westeros and renowned tournament champion.",
      relations:"Grandmother: Olenna | Father: Mace | Sister: Margaery" },
    { max:5, bio:"Famed Knight of Flowers and secret lover of Renly Baratheon. After Renly's death, joined the Kingsguard. Arrested by the Faith Militant for his sexuality.",
      relations:"Grandmother: Olenna | Sister: Margaery | Lover: Renly (deceased)" }
  ],
  mace: [
    { max:0, bio:"Lord of Highgarden and Warden of the South. Head of House Tyrell. A pompous but well-meaning lord overshadowed by his mother Olenna.",
      relations:"Mother: Olenna | Children: Margaery, Loras" },
    { max:5, bio:"Lord of Highgarden. Served on the Small Council as Master of Ships and later Master of Coin. More ambitious than talented, often manipulated by his mother.",
      relations:"Mother: Olenna | Children: Margaery, Loras" }
  ]
};

// ========== 8. CROSS-HOUSE LINKS ==========
const crossHouseLinks = [
  { a:'eddard', b:'catelyn', type:'Marriage', houses:'Stark + Tully' },
  { a:'cersei', b:'robert', type:'Marriage', houses:'Lannister + Baratheon' },
  { a:'rhaegar', b:'elia', type:'Marriage', houses:'Targaryen + Martell' },
  { a:'rhaegar', b:'lyanna', type:'Secret Marriage', houses:'Targaryen + Stark', spoilerMin:7 },
  { a:'lysa', b:'jonA', type:'Marriage', houses:'Tully + Arryn' },
  { a:'daenerys', b:'drogo', type:'Marriage', houses:'Targaryen + Dothraki', spoilerMin:1 },
  { a:'renly', b:'margaery', type:'Marriage', houses:'Baratheon + Tyrell', spoilerMin:2 },
  { a:'joffrey', b:'margaery', type:'Marriage', houses:'Baratheon + Tyrell', spoilerMin:3 },
  { a:'sansa', b:'tyrion', type:'Marriage', houses:'Stark + Lannister', spoilerMin:3 },
  { a:'tommen', b:'margaery', type:'Marriage', houses:'Baratheon + Tyrell', spoilerMin:5 },
  { a:'sansa', b:'ramsay', type:'Marriage (forced)', houses:'Stark + Bolton', spoilerMin:5 },
  { a:'trystane', b:'myrcella', type:'Betrothed', houses:'Martell + Baratheon', spoilerMin:5 },
  { a:'tyrion', b:'daenerys', type:'Hand of the Queen', houses:'Lannister + Targaryen', spoilerMin:6 },
  { a:'jon', b:'daenerys', type:'Alliance / Lovers', houses:'Stark + Targaryen', spoilerMin:7 },
  { a:'daeronII', b:'mariahM', type:'Marriage', houses:'Targaryen + Martell (ancestors)' },
  { a:'hoster', b:'catelyn', type:'Father → Daughter', houses:'Tully → Stark' },
  { a:'hoster', b:'lysa', type:'Father → Daughter', houses:'Tully → Arryn' },
  { a:'theon', b:'eddard', type:'Ward', houses:'Greyjoy → Stark' },
];

// ========== 9. GALLERY IMAGES ==========
const W='https://static.wikia.nocookie.net/gameofthrones/images/';
const galleryImages={
  eddard:[W+'3/34/Eddard_Stark.jpg/revision/latest/scale-to-width-down/357?cb=20190701140812','https://thronesapi.com/assets/images/ned-stark.jpg'],
  catelyn:[W+'d/d8/CatelynS3Promo.jpg/revision/latest/scale-to-width-down/303?cb=20190427043743','https://thronesapi.com/assets/images/catelyn-stark.jpg'],
  robb:[W+'5/50/S3E9_Robb_Stark_main.jpg/revision/latest/scale-to-width-down/327?cb=20160718071203','https://thronesapi.com/assets/images/robb-stark.jpg'],
  sansa:[W+'6/63/QueenSansa.PNG/revision/latest?cb=20210215100224','https://thronesapi.com/assets/images/sansa-stark.jpeg'],
  arya:[W+'b/be/AryaShipIronThrone.PNG/revision/latest/scale-to-width-down/335?cb=20190520174300','https://thronesapi.com/assets/images/arya-stark.jpg'],
  bran:[W+'8/81/KingBran.PNG/revision/latest/scale-to-width-down/336?cb=20190520173855','https://thronesapi.com/assets/images/bran-stark.jpg'],
  rickon:[W+'d/d9/Battle_of_the_Bastards_42.jpg/revision/latest/scale-to-width-down/365?cb=20160621185459','https://thronesapi.com/assets/images/rickon.jpg'],
  jon:[W+'d/d0/JonSnow8x06.PNG/revision/latest?cb=20190714094440','https://thronesapi.com/assets/images/jon-snow.jpg',W+'3/3e/Battle_of_the_Bastards_03.jpg/revision/latest?cb=20160615184848'],
  benjen:[W+'0/0f/610_Benjen_Promo_Crop.png/revision/latest/scale-to-width-down/235?cb=20160629183134'],
  lyanna:[W+'8/85/Lyanna_S7_E7.jpg/revision/latest/scale-to-width-down/180?cb=20170830234842'],
  tyrion:[W+'9/95/HandoftheKingTyrionLannister.PNG/revision/latest/scale-to-width-down/330?cb=20190520175204','https://thronesapi.com/assets/images/tyrion-lannister.jpg',W+'d/d1/703_Tyrion.jpg/revision/latest?cb=20170805225103'],
  cersei:[W+'b/b0/CERSEIBATTLEOFKINGSLANDING.PNG/revision/latest/scale-to-width-down/338?cb=20190906021534','https://thronesapi.com/assets/images/cersei.jpg'],
  jaime:[W+'5/51/JaimeLannisterSeason8.PNG/revision/latest/scale-to-width-down/317?cb=20190207112813','https://thronesapi.com/assets/images/jaime-lannister.jpg'],
  tywin:[W+'7/71/Tywin_Lannister_4x08.jpg/revision/latest/scale-to-width-down/348?cb=20170830015346','https://thronesapi.com/assets/images/tywin-lannister.jpg'],
  joffrey:[W+'2/25/Joffrey_Season_4_Episode_2_TLATR.jpg/revision/latest/scale-to-width-down/301?cb=20210722092942','https://thronesapi.com/assets/images/joffrey.jpg'],
  myrcella:[W+'0/02/MyrcellaS5Cropped.jpg/revision/latest/scale-to-width-down/203?cb=20160802025401'],
  tommen:[W+'7/7c/Tommen_blood_of_my_blood.jpg/revision/latest/scale-to-width-down/377?cb=20160530234845','https://thronesapi.com/assets/images/tommen.jpg'],
  daenerys:[W+'4/4f/Daenerys_Season_8.jpg/revision/latest/scale-to-width-down/301?cb=20190415212013','https://thronesapi.com/assets/images/daenerys.jpg',W+'4/48/Book_of_the_Stranger_22.jpg/revision/latest?cb=20160518173316'],
  rhaegar:[W+'5/51/Rhaeger_main_infobox.png/revision/latest/scale-to-width-down/183?cb=20210722174123'],
  viserys:[W+'0/04/Viserys_I_Infobox.png/revision/latest?cb=20220330151825','https://thronesapi.com/assets/images/viserys-targaryan.jpg'],
  aerys:[W+'4/47/Aerys_II_Targaryen_Mad_King.jpg/revision/latest/scale-to-width-down/247?cb=20170821102509'],
  rhaella:[W+'0/0e/Rhaella_pregnant.png/revision/latest/scale-to-width-down/186?cb=20171216022616'],
  drogo:[W+'1/1f/Drogo_1x01b.jpg/revision/latest?cb=20110626031733','https://thronesapi.com/assets/images/khal-drogo.jpg'],
  missandei:[W+'d/de/Missandei8X04.PNG/revision/latest/scale-to-width-down/330?cb=20190722224410','https://thronesapi.com/assets/images/missandei.jpeg'],
  greyworm:[W+'7/77/Grey-Worm-S8E5.png/revision/latest/scale-to-width-down/345?cb=20190508211715','https://thronesapi.com/assets/images/greyworm.jpg'],
  jorah:[W+'2/26/Winterfell_ep_Jorah_s8.jpg/revision/latest/scale-to-width-down/291?cb=20210722093523','https://thronesapi.com/assets/images/jorah-mormont.jpg'],
  robert:[W+'4/43/Robert_crop.png/revision/latest/scale-to-width-down/423?cb=20210223122212','https://thronesapi.com/assets/images/robert-baratheon.jpeg'],
  stannis:[W+'2/2f/StannisNew.png/revision/latest/scale-to-width-down/387?cb=20210313165449','https://thronesapi.com/assets/images/stannis.jpg'],
  renly:[W+'f/ff/Profile-Renly_Baratheon.png/revision/latest/scale-to-width-down/197?cb=20171006064500'],
  gendry:[W+'9/9f/Gendry_Infobox.jpg/revision/latest?cb=20160724222939','https://thronesapi.com/assets/images/gendry.jpg'],
  theon:[W+'7/78/TheonS8E1.PNG/revision/latest/scale-to-width-down/314?cb=20190415192721','https://thronesapi.com/assets/images/theon.jpg'],
  yara:[W+'a/a8/Game_of_thrones_6x5_yara_promo.jpg/revision/latest?cb=20160808022737','https://thronesapi.com/assets/images/yara-greyjoy.jpg'],
  euron:[W+'f/fc/Euron-Profile.PNG/revision/latest/scale-to-width-down/318?cb=20210722093627','https://thronesapi.com/assets/images/euron-greyjoy.jpg'],
  balon:[W+'1/19/Balon-profile.png/revision/latest/scale-to-width-down/275?cb=20170420085750'],
  olenna:[W+'f/f2/OlennaS7E3.png/revision/latest/scale-to-width-down/365?cb=20170803074257','https://thronesapi.com/assets/images/olenna-tyrell.jpg'],
  margaery:[W+'b/b5/Margaery_Tyrell_S6.png/revision/latest?cb=20210722163311','https://thronesapi.com/assets/images/margaery-tyrell.jpg'],
  loras:[W+'0/02/LorasTyrell5X06.PNG/revision/latest/scale-to-width-down/213?cb=20181013200613'],
  mace:[W+'f/f0/Profile-MaceTyrell.png/revision/latest/scale-to-width-down/231?cb=20170729074743'],
  oberyn:[W+'4/44/Oberyn-Martell-house-martell_s3.jpg/revision/latest/scale-to-width-down/288?cb=20190427200207','https://thronesapi.com/assets/images/red-viper.jpg'],
  doran:[W+'f/f9/Profile-DoranMartell.png/revision/latest/scale-to-width-down/255?cb=20170728221257'],
  trystane:[W+'d/d5/Trystane.jpg/revision/latest/scale-to-width-down/190?cb=20160814024816'],
  ellaria:[W+'4/4c/Ellaria_Sand_The_End.png/revision/latest/scale-to-width-down/332?cb=20170830014137','https://thronesapi.com/assets/images/ellaria-sand.jpg'],
  elia:[W+'c/c6/Elia_Martell.png/revision/latest/scale-to-width-down/251?cb=20161215025158'],
  littlefinger:[W+'9/9f/Profile-Littlefinger.png/revision/latest/scale-to-width-down/335?cb=20170826005231','https://thronesapi.com/assets/images/littlefinger.jpg'],
  davos:[W+'9/9d/DAVOSINFOBOXBELLS.PNG/revision/latest?cb=20190513052340','https://thronesapi.com/assets/images/davos-seaworth.png'],
  melisandre:[W+'0/07/Melisandre_%28The_Queen%27s_Justice%29.png/revision/latest/scale-to-width-down/319?cb=20170830235514','https://thronesapi.com/assets/images/melisandre.jpg'],
  samwell:[W+'8/8f/Maester_Sam.png/revision/latest/scale-to-width-down/381?cb=20190609215621','https://thronesapi.com/assets/images/sam.jpg'],
  ygritte:[W+'2/28/Ygritte-promotionals4pic.jpg/revision/latest/scale-to-width-down/334?cb=20170107042949','https://thronesapi.com/assets/images/ygritte.jpg'],
  tormund:[W+'9/97/Tormund_Profile.PNG/revision/latest/scale-to-width-down/320?cb=20170818044433','https://thronesapi.com/assets/images/tormund-giantsbane.jpg'],
  hodor:[W+'1/18/Season_6_hodor_main.jpg/revision/latest/scale-to-width-down/317?cb=20210722015036','https://thronesapi.com/assets/images/hodor.jpg'],
  gilly:[W+'e/ee/Gilly_main.png/revision/latest?cb=20210722093452','https://thronesapi.com/assets/images/gilly.jpg'],
  brienne:[W+'a/a9/S8_Brienne_Profil.jpg/revision/latest?cb=20190423165941','https://thronesapi.com/assets/images/brienne-tarth.jpeg'],
  hound:[W+'b/b5/SandorConfrontsGregor.PNG/revision/latest/scale-to-width-down/326?cb=20210722093812','https://thronesapi.com/assets/images/the-hound.jpg'],
  mountain:[W+'8/81/GregorGregorLightenedProfile.png/revision/latest/scale-to-width-down/270?cb=20190724144505'],
  podrick:[W+'2/22/Podrick8x01.PNG/revision/latest/scale-to-width-down/189?cb=20190427145446'],
  bronn:[W+'f/f5/Bronn_S8E6.png/revision/latest/scale-to-width-down/378?cb=20210722075802','https://thronesapi.com/assets/images/bronn.jpg'],
  varys:[W+'f/ff/Varys8x05Dragonstone.PNG/revision/latest?cb=20190513041715','https://thronesapi.com/assets/images/varys.jpg'],
  pycelle:[W+'d/d5/GrandMaesterPycelle.png/revision/latest?cb=20170728075424','https://thronesapi.com/assets/images/pycelle.jpg'],
  qyburn:[W+'8/8a/804_Qyburn_Profile.png/revision/latest/scale-to-width-down/356?cb=20210722093554','https://thronesapi.com/assets/images/qyburn.jpg'],
  highsparrow:[W+'3/3b/Blood_of_My_Blood_16.jpg/revision/latest/scale-to-width-down/333?cb=20160527164016','https://thronesapi.com/assets/images/the-high-sparrow.jpg'],
  daario:[W+'d/d8/Daario-s6e4.jpg/revision/latest/scale-to-width-down/323?cb=20160512195958','https://thronesapi.com/assets/images/daario.jpg'],
  jaqen:[W+'d/da/The_Door_Jaqen_infobox.jpg/revision/latest/scale-to-width-down/322?cb=20160808073200','https://thronesapi.com/assets/images/jaqen-hghar.jpg'],
  ramsay:[W+'d/d2/Ramsay_S06E09_RESZIED_FOR_INFOBOX.jpg/revision/latest/scale-to-width-down/377?cb=20160622071734','https://thronesapi.com/assets/images/ramsey-bolton.jpg'],
  roose:[W+'2/26/Profile-RooseBolton.png/revision/latest/scale-to-width-down/367?cb=20170728090234','https://thronesapi.com/assets/images/roose-bolton.jpg'],
  walder:[W+'e/e4/S06E06_-_Walder_Frey_Cropped_new.jpg/revision/latest/scale-to-width-down/329?cb=20161215025257'],
  nightking:[W+'1/1f/Night_King_BTW.jpg/revision/latest/scale-to-width-down/234?cb=20210722093007'],
  kevan:[W+'6/6d/Kevan-profile.png/revision/latest/scale-to-width-down/225?cb=20170421102914'],
  lancel:[W+'a/a5/No_One_09.jpg/revision/latest/scale-to-width-down/177?cb=20170829235034'],
  selyse:[W+'6/65/SelyseS05E05.png/revision/latest/scale-to-width-down/194?cb=20150515051443'],
  shireen:[W+'e/eb/Shireen_Baratheon_Season_4_profile.jpg/revision/latest/scale-to-width-down/222?cb=20210722092809'],
  hoster:[W+'a/a3/Hoster_Tully.png/revision/latest/scale-to-width-down/255?cb=20140615193244'],
  edmure:[W+'1/12/EdmureInfobox.PNG/revision/latest/scale-to-width-down/202?cb=20190520033037'],
  blackfish:[W+'6/61/6x07_Blackfish.png/revision/latest/scale-to-width-down/226?cb=20160601191023'],
  jonA:[W+'7/7a/Jon_Arryn_funeral_bier.jpg/revision/latest/scale-to-width-down/300?cb=20120520000749'],
  robin:[W+'8/8e/RobinArryn.png/revision/latest/scale-to-width-down/223?cb=20190521213310'],
  lysa:[W+'e/e3/LysaArryn.png/revision/latest?cb=20140505085147'],
  aemonT:[W+'3/32/Aemonepisode5.png/revision/latest/scale-to-width-down/300?cb=20190427054732',W+'a/a9/Aemon_1x09.jpg/revision/latest/scale-to-width-down/300?cb=20110613221610'],
  bloodraven:[W+'a/a8/Oathbreaker_05.jpg/revision/latest/scale-to-width-down/300?cb=20170818202718',W+'3/3a/Three-eyed_raven.png/revision/latest/scale-to-width-down/400?cb=20110622101243'],
  aegonIV:[W+'6/64/Aegon-IV-S8.png/revision/latest/scale-to-width-down/300?cb=20191127140740'],
  daeronII:[W+'c/c4/Daeron-S8.png/revision/latest/scale-to-width-down/300?cb=20191127142407'],
  baelorB:[W+'b/b5/Baelor_Breakspear-AKotSK.png/revision/latest/scale-to-width-down/300?cb=20260223232300'],
  maekar:[W+'3/3a/Maekar-Seven.jpg/revision/latest/scale-to-width-down/300?cb=20260204115453'],
  aerion:[W+'b/bd/Aerion-2ndTrailer.png/revision/latest/scale-to-width-down/300?cb=20251226124912'],
  aegonV:[W+'c/c1/Egg-Promo.png/revision/latest/scale-to-width-down/300?cb=20251227120129',W+'1/16/Egg-AKotSK.png/revision/latest/scale-to-width-down/300?cb=20240805061446'],
  daemonB:[W+'f/fd/BlackDragon-S8.png/revision/latest/scale-to-width-down/300?cb=20191127142304'],
  bittersteel:[W+'c/c9/Aegor_Bittersteel.png/revision/latest/scale-to-width-down/300?cb=20171214014816'],
  shiera:[W+'4/42/Roman_Papsuev_-_Shiera_Seastar.jpg/revision/latest/scale-to-width-down/300?cb=20230701113204'],
  dunk:[W+'3/31/Dunk-The_Morrow.png/revision/latest/scale-to-width-down/300?cb=20260219111850'],
};


// ========== 10. FAMILY EDGES ==========
const familyEdges=[
  // Stark
  ['eddard','catelyn','married'],['eddard','robb','parent'],['eddard','sansa','parent'],
  ['eddard','arya','parent'],['eddard','bran','parent'],['eddard','rickon','parent'],
  ['catelyn','robb','parent'],['catelyn','sansa','parent'],['catelyn','arya','parent'],
  ['catelyn','bran','parent'],['catelyn','rickon','parent'],
  ['eddard','benjen','siblings'],['eddard','lyanna','siblings'],['benjen','lyanna','siblings'],
  ['robb','sansa','siblings'],['robb','arya','siblings'],['robb','bran','siblings'],['robb','rickon','siblings'],
  ['sansa','arya','siblings'],['sansa','bran','siblings'],['sansa','rickon','siblings'],
  ['arya','bran','siblings'],['arya','rickon','siblings'],['bran','rickon','siblings'],
  ['jon','rhaegar','parent'],['jon','lyanna','parent'],
  ['eddard','jon','raised'],['jon','robb','raised together'],['jon','sansa','raised together'],
  ['jon','arya','raised together'],['jon','bran','raised together'],['jon','rickon','raised together'],
  // Lannister
  ['tywin','cersei','parent'],['tywin','jaime','parent'],['tywin','tyrion','parent'],
  ['cersei','jaime','siblings'],['cersei','tyrion','siblings'],['jaime','tyrion','siblings'],
  ['tywin','kevan','siblings'],['kevan','lancel','parent'],
  ['cersei','robert','married'],['cersei','joffrey','parent'],['cersei','myrcella','parent'],['cersei','tommen','parent'],
  ['jaime','joffrey','parent (secret)'],['jaime','myrcella','parent (secret)'],['jaime','tommen','parent (secret)'],
  ['joffrey','myrcella','siblings'],['joffrey','tommen','siblings'],['myrcella','tommen','siblings'],
  ['joffrey','margaery','married'],['tommen','margaery','married'],['sansa','tyrion','married (annulled)'],
  // Targaryen
  ['aerys','rhaella','married'],['aerys','rhaegar','parent'],['aerys','viserys','parent'],['aerys','daenerys','parent'],
  ['rhaella','rhaegar','parent'],['rhaella','viserys','parent'],['rhaella','daenerys','parent'],
  ['rhaegar','viserys','siblings'],['rhaegar','daenerys','siblings'],['viserys','daenerys','siblings'],
  ['rhaegar','elia','married'],['rhaegar','lyanna','married (secret)'],
  ['daenerys','drogo','married'],['daenerys','jon','aunt/nephew'],
  ['daenerys','jorah','queen/advisor'],['daenerys','missandei','queen/advisor'],['daenerys','greyworm','queen/commander'],
  ['daenerys','tyrion','queen/hand'],
  // Baratheon
  ['robert','stannis','siblings'],['robert','renly','siblings'],['stannis','renly','siblings'],
  ['robert','gendry','parent'],['stannis','selyse','married'],['stannis','shireen','parent'],
  ['selyse','shireen','parent'],['stannis','melisandre','king/advisor'],['stannis','davos','king/advisor'],
  ['renly','loras','lovers'],['renly','margaery','married'],
  // Greyjoy
  ['balon','yara','parent'],['balon','theon','parent'],['balon','euron','siblings'],
  ['yara','theon','siblings'],
  // Tyrell
  ['olenna','mace','parent'],['mace','margaery','parent'],['mace','loras','parent'],
  ['margaery','loras','siblings'],
  // Martell
  ['doran','oberyn','siblings'],['doran','trystane','parent'],['doran','elia','siblings'],
  ['oberyn','elia','siblings'],['oberyn','ellaria','lovers'],['trystane','myrcella','betrothed'],
  // Tully / Arryn
  ['hoster','catelyn','parent'],['hoster','lysa','parent'],['hoster','edmure','parent'],
  ['hoster','blackfish','siblings'],['catelyn','lysa','siblings'],['catelyn','edmure','siblings'],
  ['lysa','edmure','siblings'],['lysa','jonA','married'],['jonA','robin','parent'],['lysa','robin','parent'],
  ['lysa','littlefinger','married'],['littlefinger','sansa','manipulated'],
  // Cross-house
  ['jon','davos','king/advisor'],['jon','melisandre','resurrected by'],
  ['theon','eddard','ward of'],['theon','robb','raised together'],
  ['missandei','greyworm','lovers'],
  // Key Figures
  ['jon','samwell','best friends'],['samwell','gilly','lovers'],
  ['jon','ygritte','lovers'],['jon','tormund','allies'],
  ['bran','hodor','protector'],['brienne','sansa','sworn to'],
  ['brienne','podrick','knight/squire'],['brienne','jaime','knighted by'],
  ['hound','arya','protector'],['hound','mountain','siblings'],
  ['mountain','cersei','served'],['mountain','oberyn','killed'],
  ['tyrion','bronn','allies'],['jaime','bronn','allies'],
  ['varys','tyrion','allies'],['varys','daenerys','queen/advisor'],
  ['daenerys','daario','lovers'],['arya','jaqen','mentor'],
  ['ramsay','roose','parent'],['ramsay','sansa','married'],
  ['ramsay','theon','captor'],['roose','robb','betrayed'],
  ['walder','robb','betrayed'],['walder','catelyn','killed'],
  ['nightking','arya','killed by'],['cersei','qyburn','queen/hand'],
  // Targaryen Dynasty Ancestors
  ['aegonIV','naerys','married'],['aegonIV','daeronII','parent'],['naerys','daeronII','parent'],
  ['daeronII','mariahM','married'],['daeronII','baelorB','parent'],['daeronII','maekar','parent'],
  ['mariahM','baelorB','parent'],['mariahM','maekar','parent'],
  ['baelorB','maekar','siblings'],
  // Maekar's children
  ['maekar','aerion','parent'],['maekar','daeronD','parent'],['maekar','aemonT','parent'],['maekar','aegonV','parent'],
  ['aerion','daeronD','siblings'],['aerion','aemonT','siblings'],['aerion','aegonV','siblings'],
  ['daeronD','aemonT','siblings'],['daeronD','aegonV','siblings'],['aemonT','aegonV','siblings'],
  // Dynasty connection to main series
  ['aegonV','aerys','ancestor'],
  // Great Bastards (all children of Aegon IV)
  ['aegonIV','daemonB','parent (bastard)'],['aegonIV','bloodraven','parent (bastard)'],
  ['aegonIV','bittersteel','parent (bastard)'],['aegonIV','shiera','parent (bastard)'],
  ['daemonB','bloodraven','half-siblings'],['daemonB','bittersteel','half-siblings'],['daemonB','shiera','half-siblings'],
  ['bloodraven','bittersteel','half-siblings'],['bloodraven','shiera','half-siblings'],
  ['bittersteel','shiera','half-siblings'],
  // Blackfyre dynasty
  ['daemonB','daemonBII','parent'],
  // Rivalries & lovers
  ['bloodraven','bittersteel','rivals'],['bloodraven','shiera','lovers'],
  ['daemonB','daeronII','rivals'],
  // Dunk & Egg
  ['dunk','aegonV','knight/squire'],['dunk','brienne','ancestor'],
  // Maester Aemon show connections
  ['aemonT','samwell','mentor'],['aemonT','jon','great-great-uncle'],
  // Bloodraven = Three-Eyed Raven
  ['bloodraven','bran','mentor (Three-Eyed Raven)'],
];

// ========== 11. HOUSE ALIASES (search) ==========
const houseAliases={
  stark:['stark','winterfell','wolf','north','winter'],
  lannister:['lannister','casterly','lion','westerlands','gold'],
  targaryen:['targaryen','dragon','dragonstone','fire','blood','valyrian','aegon','maekar','aemon','ancestor','dynasty'],
  baratheon:['baratheon','storm','stag','fury'],
  greyjoy:['greyjoy','iron islands','pyke','kraken','ironborn'],
  tyrell:['tyrell','highgarden','rose','reach'],
  martell:['martell','dorne','sunspear','sun','sand','viper'],
  tully:['tully','riverrun','fish','riverlands','arryn','eyrie','vale'],
  blackfyre:['blackfyre','bastard','great bastards','rebellion','golden company','dunk','egg','knight','hedge knight'],
};


// ========== 12. HOUSES (section layout data) ==========
const houses = [
  // ---- STARK ----
  {
    id: 'stark', name: 'House Stark', sigil: '\u{1F43A}', seat: 'Winterfell',
    motto: '"Winter Is Coming"', color: 'var(--stark)',
    description: "The Starks have ruled the North from Winterfell for thousands of years as Wardens of the North. Known for their unwavering honor, the Starks descend from the First Men and follow the Old Gods. Their words \u2014 'Winter Is Coming' \u2014 serve as both a warning and a family philosophy.",
    sigilStyle: 'background:var(--stark)',
    badgeStyle: 'background:rgba(122,155,181,.15);color:var(--stark)',
    cssClass: 'house-stark',
    groups: [
      {
        label: 'Patriarch & Matriarch',
        layout: 'couple',
        members: [
          { id: 'eddard', initials: 'NS', tag: 'Father' },
          { id: 'catelyn', initials: 'CT', tag: 'Mother' }
        ]
      },
      {
        label: 'Children of Ned & Catelyn',
        layout: 'children',
        members: [
          { id: 'robb', initials: 'RS', tag: 'Eldest Son' },
          { id: 'sansa', initials: 'SS', tag: 'Eldest Daughter' },
          { id: 'arya', initials: 'AS', tag: 'Daughter' },
          { id: 'bran', initials: 'BS', tag: 'Son' },
          { id: 'rickon', initials: 'RS', tag: 'Youngest Son' }
        ]
      },
      {
        label: 'Raised at Winterfell / Stark-connected',
        layout: 'grid',
        members: [
          { id: 'jon', initials: 'JS', tag: 'Ned\'s "Nephew" (secret)', avatarStyle: 'background:linear-gradient(135deg,var(--stark),var(--targaryen))' },
          { id: 'benjen', initials: 'BJ', tag: 'Ned\'s Brother' },
          { id: 'theon_s', initials: 'TG', tag: 'Ward / Foster Brother', avatarStyle: 'border-color:var(--greyjoy)' }
        ]
      },
      {
        label: 'Key Relationship \u2014 Jon Snow\'s True Parentage',
        layout: 'couple-children',
        spoilerMin: 7,
        members: [
          { id: 'rhaegar', initials: 'RT', tag: 'Father (biological)', avatarStyle: 'background:linear-gradient(135deg,#4a1010,#6a2020);border-color:var(--targaryen)' },
          { id: 'lyanna', initials: 'LS', tag: 'Mother (biological)' }
        ],
        children: [
          { id: 'jon', initials: 'JS', tag: 'Their Son', cardStyle: 'max-width:170px;border-top-color:var(--targaryen)', avatarStyle: 'background:linear-gradient(135deg,var(--stark),var(--targaryen))' }
        ]
      }
    ]
  },

  // ---- LANNISTER ----
  {
    id: 'lannister', name: 'House Lannister', sigil: '\u{1F981}', seat: 'Casterly Rock',
    motto: '"Hear Me Roar!" \u00B7 "A Lannister Always Pays His Debts"', color: 'var(--lannister)',
    description: "The wealthiest family in Westeros, the Lannisters of Casterly Rock are known for their gold mines, political cunning, and ruthless ambition. Their official motto is 'Hear Me Roar!' but they are better known by 'A Lannister Always Pays His Debts.'",
    sigilStyle: 'background:var(--lannister);color:#1a1a24',
    badgeStyle: 'background:rgba(201,168,76,.15);color:var(--lannister)',
    cssClass: 'house-lannister',
    groups: [
      {
        label: 'Patriarch',
        layout: 'single',
        members: [
          { id: 'tywin', initials: 'TL', tag: 'Father', cardStyle: 'max-width:180px' }
        ]
      },
      {
        label: 'Children of Tywin',
        layout: 'children',
        members: [
          { id: 'cersei', initials: 'CL', tag: 'Eldest \u00B7 Twin' },
          { id: 'jaime', initials: 'JL', tag: 'Twin of Cersei' },
          { id: 'tyrion', initials: 'TY', tag: 'Youngest Son' }
        ]
      },
      {
        label: 'Cersei\'s Marriage & Children',
        layout: 'couple-children',
        spoilerLabel: { min: 1, safe: 'Cersei\'s Marriage & Children', full: 'Cersei\'s Marriage & Children (officially Baratheon, actually Jaime\'s)' },
        members: [
          { id: 'cersei2', initials: 'CL', tag: null },
          { id: 'robert', initials: 'RB', tag: 'Husband', cardStyle: 'border-top-color:var(--baratheon)', avatarStyle: 'background:linear-gradient(135deg,#5a4010,#7a6020);border-color:var(--baratheon)' }
        ],
        children: [
          { id: 'joffrey', initials: 'JB', tag: 'Eldest Son' },
          { id: 'myrcella', initials: 'MB', tag: 'Daughter' },
          { id: 'tommen', initials: 'TB', tag: 'Youngest Son' }
        ],
        childrenStyle: 'max-width:600px;margin:0 auto'
      },
      {
        label: 'Extended \u2014 Kevan & Lancel',
        layout: 'grid',
        members: [
          { id: 'kevan', initials: 'KL', tag: 'Uncle' },
          { id: 'lancel', initials: 'LL', tag: 'Cousin' }
        ]
      }
    ]
  },

  // ---- TARGARYEN ----
  {
    id: 'targaryen', name: 'House Targaryen', sigil: '\u{1F409}', seat: 'Dragonstone',
    motto: '"Fire and Blood"', color: 'var(--targaryen)',
    description: "The Targaryens conquered and united the Seven Kingdoms with dragons nearly 300 years before the events of Game of Thrones. Descended from Old Valyria, they practiced incestuous marriages to keep their bloodline pure. The dynasty spans from Aegon the Conqueror through the Dunk & Egg era's Aegon V to the Mad King and finally Daenerys.",
    sigilStyle: 'background:var(--targaryen)',
    badgeStyle: 'background:rgba(139,32,32,.15);color:#d44',
    cssClass: 'house-targaryen',
    groups: [
      {
        label: 'Targaryen Dynasty \u2014 Ancestors (Book Lore)',
        layout: 'couple-children',
        members: [
          { id: 'aegonIV', initials: 'A4', tag: 'Ancestor' },
          { id: 'naerys', initials: 'Na', tag: 'Ancestor' }
        ],
        children: [
          { id: 'daeronII', initials: 'D2', tag: 'Son' },
          { id: 'mariahM', initials: 'MM', tag: 'Wife' }
        ],
        childrenLayout: 'couple'
      },
      {
        label: 'Sons of Daeron II',
        layout: 'children',
        members: [
          { id: 'baelorB', initials: 'BB', tag: 'Eldest Son' },
          { id: 'maekar', initials: 'M1', tag: 'Youngest Son' }
        ]
      },
      {
        label: 'Children of King Maekar I (Dunk & Egg Era)',
        layout: 'children',
        members: [
          { id: 'aerion', initials: 'Ae', tag: 'Son' },
          { id: 'daeronD', initials: 'DD', tag: 'Son' },
          { id: 'aemonT', initials: 'Am', tag: 'Son' },
          { id: 'aegonV', initials: 'Eg', tag: 'Youngest Son' }
        ]
      },
      {
        connector: '\u2B07 Aegon V\'s grandson \u2192 <strong>Aerys II "The Mad King"</strong> \u2B07'
      },
      {
        label: 'The Mad King & Queen',
        layout: 'couple',
        members: [
          { id: 'aerys', initials: 'AII', tag: 'Father' },
          { id: 'rhaella', initials: 'RhT', tag: 'Mother' }
        ]
      },
      {
        label: 'Children of Aerys & Rhaella',
        layout: 'children',
        members: [
          { id: 'rhaegar2', initials: 'RT', tag: 'Eldest Son' },
          { id: 'viserys', initials: 'VT', tag: 'Second Son' },
          { id: 'daenerys', initials: 'DT', tag: 'Youngest Daughter' }
        ]
      },
      {
        label: 'Rhaegar\'s Families',
        layout: 'couple-children',
        spoilerMin: 7,
        members: [
          { id: 'rhaegar3', initials: 'RT', tag: null },
          { id: 'elia', initials: 'EM', tag: 'Wife (1st)', avatarStyle: 'border-color:var(--martell);background:linear-gradient(135deg,#5a3010,#7a4a1a)' }
        ],
        note: { text: 'Children: <strong>Rhaenys</strong> & <strong>Aegon</strong> (both killed in Robert\'s Rebellion)' }
      },
      {
        // Second part of Rhaegar's Families
        layout: 'couple-children',
        members: [
          { id: 'rhaegar4', initials: 'RT', tag: null },
          { id: 'lyanna2', initials: 'LS', tag: 'Wife (2nd, secret)', avatarStyle: 'border-color:var(--stark);background:linear-gradient(135deg,#3a5060,#5a7a90)' }
        ],
        children: [
          { id: 'jon2', initials: 'JS', tag: 'Son', cardStyle: 'max-width:170px;border-top-color:var(--stark)', avatarStyle: 'background:linear-gradient(135deg,var(--stark),var(--targaryen))' }
        ]
      },
      {
        label: 'Daenerys\' Key Allies',
        layout: 'grid',
        members: [
          { id: 'drogo', initials: 'KD', tag: 'Husband', avatarStyle: 'background:linear-gradient(135deg,#3a2a1a,#5a4a2a);border-color:#7a6a4a' },
          { id: 'missandei', initials: 'Mi', tag: 'Advisor', avatarStyle: 'background:linear-gradient(135deg,#4a3a2a,#6a5a3a);border-color:#8a7a5a' },
          { id: 'greyworm', initials: 'GW', tag: 'Commander', avatarStyle: 'background:linear-gradient(135deg,#3a3a4a,#5a5a6a);border-color:#7a7a8a' },
          { id: 'jorah', initials: 'JM', tag: 'Advisor / Sworn Sword', avatarStyle: 'background:linear-gradient(135deg,#3a4a3a,#4a5a4a);border-color:#6a7a6a' }
        ]
      }
    ]
  },

  // ---- BARATHEON ----
  {
    id: 'baratheon', name: 'House Baratheon', sigil: '\u{1F98C}', seat: 'Storm\'s End',
    motto: '"Ours Is the Fury"', color: 'var(--baratheon)',
    description: "House Baratheon was founded by Orys Baratheon, rumored bastard brother of Aegon the Conqueror. Robert Baratheon overthrew the Targaryens in rebellion and claimed the Iron Throne. Known for their fierce tempers and warrior spirit, their words are 'Ours Is the Fury.'",
    sigilStyle: 'background:var(--baratheon);color:#1a1a24',
    badgeStyle: 'background:rgba(212,160,23,.15);color:var(--baratheon)',
    cssClass: 'house-baratheon',
    groups: [
      {
        label: 'The Three Brothers',
        layout: 'grid',
        members: [
          { id: 'robert2', initials: 'RB', tag: 'Eldest Brother' },
          { id: 'stannis', initials: 'SB', tag: 'Middle Brother' },
          { id: 'renly', initials: 'ReB', tag: 'Youngest Brother' }
        ]
      },
      {
        label: 'Robert\'s True-born heirs \u2014 None (all are Jaime\'s)',
        layout: 'grid',
        spoilerLabel: { min: 1, safe: 'Robert\'s Heirs', full: 'Robert\'s True-born heirs \u2014 None (all are Jaime\'s)' },
        note: {
          text: 'Robert\'s "official" children \u2014 Joffrey, Myrcella, Tommen \u2014 are biologically Jaime Lannister\'s. See House Lannister above.',
          spoiler: { min: 1, safe: 'Robert\'s children \u2014 Joffrey, Myrcella, Tommen \u2014 appear in the Lannister section above.' }
        },
        members: []
      },
      {
        label: 'Robert\'s Bastard',
        layout: 'single',
        members: [
          { id: 'gendry', initials: 'GB', tag: 'Bastard Son', cardStyle: 'max-width:180px' }
        ]
      },
      {
        label: 'Stannis\' Family',
        layout: 'grid',
        members: [
          { id: 'selyse', initials: 'Se', tag: 'Wife' },
          { id: 'shireen', initials: 'Sh', tag: 'Daughter' },
          { id: 'melisandre', initials: 'Me', tag: 'Advisor', avatarStyle: 'background:linear-gradient(135deg,#6a1010,#8a2020);border-color:#b03030' },
          { id: 'davos', initials: 'DS', tag: 'Loyal Advisor', avatarStyle: 'background:linear-gradient(135deg,#3a3a3a,#5a5a5a);border-color:#7a7a7a' }
        ]
      }
    ]
  },

  // ---- GREYJOY ----
  {
    id: 'greyjoy', name: 'House Greyjoy', sigil: '\u{1F991}', seat: 'Pyke \u00B7 Iron Islands',
    motto: '"We Do Not Sow"', color: 'var(--greyjoy)',
    description: "The ironborn of the Iron Islands follow the Drowned God and live by the Old Way \u2014 taking what they want through raiding and reaving. House Greyjoy rules from the castle of Pyke, and their words 'We Do Not Sow' reflect their predatory culture.",
    sigilStyle: 'background:var(--greyjoy)',
    badgeStyle: 'background:rgba(74,102,112,.15);color:var(--greyjoy)',
    cssClass: 'house-greyjoy',
    groups: [
      {
        label: 'Lord of the Iron Islands',
        layout: 'single',
        members: [
          { id: 'balon', initials: 'BG', tag: 'Father', cardStyle: 'max-width:180px' }
        ]
      },
      {
        label: 'Balon\'s Children & Brother',
        layout: 'grid',
        members: [
          { id: 'yara', initials: 'YG', tag: 'Daughter' },
          { id: 'theon', initials: 'TG', tag: 'Son' },
          { id: 'euron', initials: 'EG', tag: 'Balon\'s Brother' }
        ]
      }
    ]
  },

  // ---- TYRELL ----
  {
    id: 'tyrell', name: 'House Tyrell', sigil: '\u{1F339}', seat: 'Highgarden',
    motto: '"Growing Strong"', color: 'var(--tyrell)',
    description: "The Tyrells of Highgarden are the second wealthiest family in Westeros, ruling the fertile Reach. Known for political marriages and soft power rather than military might, they were secretly one of the most politically savvy houses. Their words are 'Growing Strong.'",
    sigilStyle: 'background:var(--tyrell)',
    badgeStyle: 'background:rgba(90,138,60,.15);color:var(--tyrell)',
    cssClass: 'house-tyrell',
    groups: [
      {
        label: 'The Queen of Thorns & Family',
        layout: 'grid',
        members: [
          { id: 'olenna', initials: 'OT', tag: 'Grandmother' },
          { id: 'mace', initials: 'MT', tag: 'Son of Olenna' },
          { id: 'margaery', initials: 'MaT', tag: 'Granddaughter' },
          { id: 'loras', initials: 'LT', tag: 'Grandson' }
        ]
      }
    ]
  },

  // ---- MARTELL ----
  {
    id: 'martell', name: 'House Martell', sigil: '\u2600\uFE0F', seat: 'Sunspear \u00B7 Dorne',
    motto: '"Unbowed, Unbent, Unbroken"', color: 'var(--martell)',
    description: "House Martell rules Dorne from Sunspear, the only kingdom never conquered by the Targaryens. Dorne joined the Seven Kingdoms through marriage, not war. Known for their progressive views on gender and sexuality, their words are 'Unbowed, Unbent, Unbroken.'",
    sigilStyle: 'background:var(--martell)',
    badgeStyle: 'background:rgba(212,118,44,.15);color:var(--martell)',
    cssClass: 'house-martell',
    groups: [
      {
        label: 'Ruling Family',
        layout: 'grid',
        members: [
          { id: 'doran', initials: 'DM', tag: 'Head of House' },
          { id: 'oberyn', initials: 'OM', tag: 'Brother' },
          { id: 'trystane', initials: 'TrM', tag: 'Doran\'s Son' },
          { id: 'ellaria', initials: 'ES', tag: 'Oberyn\'s Partner' }
        ]
      }
    ]
  },

  // ---- TULLY & ARRYN ----
  {
    id: 'tully', name: 'House Tully & Arryn', sigil: '\u{1F41F}', seat: 'Riverrun & The Eyrie',
    motto: 'Tully: "Family, Duty, Honor" \u00B7 Arryn: "As High as Honor"', color: 'var(--tully)',
    description: "House Tully of Riverrun rules the Riverlands, strategically located at the crossroads of Westeros. The Tullys are deeply tied to the Starks, Arryns, and Lannisters through marriage. House Arryn of the Eyrie rules the mountainous Vale, their near-impregnable castle sitting atop the Mountains of the Moon.",
    sigilStyle: 'background:var(--tully)',
    badgeStyle: 'background:rgba(58,110,165,.15);color:var(--tully)',
    cssClass: 'house-tully',
    groups: [
      {
        label: 'House Tully',
        layout: 'grid',
        members: [
          { id: 'hoster', initials: 'HT', tag: 'Patriarch' },
          { id: 'catelyn2', initials: 'CT', tag: 'Eldest Daughter' },
          { id: 'lysa', initials: 'LA', tag: 'Middle Daughter' },
          { id: 'edmure', initials: 'ET', tag: 'Son' },
          { id: 'blackfish', initials: 'BrT', tag: 'Uncle' }
        ]
      },
      {
        label: 'House Arryn',
        layout: 'couple-children',
        members: [
          { id: 'jonA', initials: 'JA', tag: 'Husband', avatarStyle: 'border-color:var(--arryn);background:linear-gradient(135deg,#3a4a5a,#5a6a7a)' },
          { id: 'lysa2', initials: 'LA', tag: 'Wife' }
        ],
        children: [
          { id: 'robin', initials: 'RA', tag: 'Son', cardStyle: 'max-width:170px;border-top-color:var(--arryn)', avatarStyle: 'border-color:var(--arryn);background:linear-gradient(135deg,#3a4a5a,#5a6a7a)' }
        ]
      },
      {
        label: 'Petyr "Littlefinger" Baelish \u2014 Connected to both',
        layout: 'single',
        members: [
          { id: 'littlefinger', initials: 'PB', tag: 'Manipulator', cardStyle: 'max-width:180px;border-top-color:#6a5a7a', avatarStyle: 'background:linear-gradient(135deg,#3a2a4a,#5a4a6a);border-color:#6a5a7a' }
        ],
        note: {
          text: 'Grew up with Catelyn & Lysa \u00B7 Secretly loved Catelyn \u00B7 Married then murdered Lysa \u00B7 Manipulated Robin',
          spoiler: { min: 4, safe: 'Grew up with Catelyn & Lysa Tully \u00B7 Master of Coin' }
        }
      }
    ]
  },

  // ---- BLACKFYRE ----
  {
    id: 'blackfyre', name: 'House Blackfyre & The Great Bastards', sigil: '\u{1F409}', seat: 'Exiled',
    motto: '"Beneath the gold, the bitter steel"', color: 'var(--blackfyre)',
    description: "House Blackfyre was founded by Daemon Blackfyre, a legitimized Great Bastard of King Aegon IV 'The Unworthy.' The Blackfyre Rebellions \u2014 five civil wars between the mainline Targaryens and the Blackfyre pretenders \u2014 shaped Westerosi history for a century. The Great Bastards include Bloodraven (who became the Three-Eyed Raven), Bittersteel (founder of the Golden Company), and Shiera Seastar.",
    sigilStyle: 'background:var(--blackfyre)',
    badgeStyle: 'background:rgba(42,21,21,.25);color:#d44',
    cssClass: 'house-blackfyre',
    groups: [
      {
        label: 'The Great Bastards of Aegon IV',
        layout: 'grid',
        note: { text: '\u2B06 Father: <strong>Aegon IV "The Unworthy"</strong> (see House Targaryen) \u2B06' },
        members: [
          { id: 'daemonB', initials: 'DB', tag: 'Great Bastard', avatarStyle: 'background:linear-gradient(135deg,#1a0a0a,#3a1515);border-color:var(--blackfyre)' },
          { id: 'bloodraven', initials: 'BR', tag: 'Great Bastard', avatarStyle: 'background:linear-gradient(135deg,#1a0a0a,#3a1515);border-color:var(--blackfyre)' },
          { id: 'bittersteel', initials: 'BS', tag: 'Great Bastard', avatarStyle: 'background:linear-gradient(135deg,#1a0a0a,#3a1515);border-color:var(--blackfyre)' },
          { id: 'shiera', initials: 'SS', tag: 'Great Bastard', avatarStyle: 'background:linear-gradient(135deg,#1a0a0a,#3a1515);border-color:var(--blackfyre)' }
        ]
      },
      {
        label: 'The Blackfyre Pretenders',
        layout: 'grid',
        members: [
          { id: 'daemonBII', initials: 'D2', tag: 'Pretender', avatarStyle: 'background:linear-gradient(135deg,#1a0a0a,#3a1515);border-color:var(--blackfyre)' }
        ]
      }
    ]
  },

  // ---- KEY FIGURES ----
  {
    id: 'keyfigures', name: 'Key Figures & Independents', sigil: '\u2694\uFE0F', seat: null,
    motto: 'Characters who shape the story across all houses', color: '#8a8a9a',
    description: "These characters don't belong to any single Great House but play pivotal roles across the story \u2014 from Night's Watch brothers and wildling allies to scheming advisors and terrifying villains.",
    sigilStyle: 'background:#6a6a7a',
    badgeStyle: null,
    cssClass: '',
    sectionStyle: '--house-accent:#8a8a9a',
    groups: [
      {
        label: 'The Night\'s Watch & The North',
        layout: 'grid',
        members: [
          { id: 'samwell', initials: 'ST', tag: 'Jon\'s Closest Ally' },
          { id: 'ygritte', initials: 'Yg', tag: 'Jon\'s Lover' },
          { id: 'tormund', initials: 'TG', tag: 'Jon\'s Ally' },
          { id: 'hodor', initials: 'Ho', tag: 'Bran\'s Protector' },
          { id: 'gilly', initials: 'Gi', tag: 'Sam\'s Partner' }
        ]
      },
      {
        label: 'A Knight of the Seven Kingdoms (Book / AKOTSK)',
        layout: 'grid',
        members: [
          { id: 'dunk', initials: 'DT', tag: 'AKOTSK Protagonist' },
          { id: 'aemonT2', initials: 'Am', tag: 'Dunk & Egg Era' }
        ]
      },
      {
        label: 'Knights & Warriors',
        layout: 'grid',
        members: [
          { id: 'brienne', initials: 'BT', tag: 'Sworn to Starks' },
          { id: 'hound', initials: 'SC', tag: 'The Hound' },
          { id: 'mountain', initials: 'GC', tag: 'The Mountain' },
          { id: 'podrick', initials: 'PP', tag: 'Brienne\'s Squire' },
          { id: 'bronn', initials: 'Br', tag: 'Tyrion & Jaime\'s Ally' }
        ]
      },
      {
        label: 'King\'s Landing \u2014 Schemers & Advisors',
        layout: 'grid',
        members: [
          { id: 'varys', initials: 'Vy', tag: 'Spymaster' },
          { id: 'pycelle', initials: 'Py', tag: 'Grand Maester' },
          { id: 'qyburn', initials: 'Qy', tag: 'Cersei\'s Hand' },
          { id: 'highsparrow', initials: 'HS', tag: 'Faith Leader' }
        ]
      },
      {
        label: 'Essos & Daenerys\' Circle',
        layout: 'grid',
        members: [
          { id: 'daario', initials: 'Da', tag: 'Dany\'s Lover' },
          { id: 'jaqen', initials: 'JH', tag: 'Arya\'s Mentor' }
        ]
      },
      {
        label: 'Villains',
        layout: 'grid',
        members: [
          { id: 'ramsay', initials: 'RB', tag: 'Sansa\'s Tormentor' },
          { id: 'roose', initials: 'RoB', tag: 'Northern Lord' },
          { id: 'walder', initials: 'WF', tag: 'Lord of the Crossing' },
          { id: 'nightking', initials: 'NK', tag: 'Main Antagonist', avatarStyle: 'background:linear-gradient(135deg,#3a5a6a,#5a8a9a);border-color:var(--whitewalker)' }
        ]
      }
    ]
  }
];

// ========== LOCATIONS ==========
const locations = [
  { category: 'Westeros \u2014 The Seven Kingdoms', places: [
    { name: 'King\'s Landing', region: 'The Crownlands', description: 'Capital of the Seven Kingdoms. Home to the Iron Throne and the Red Keep. Where most political scheming takes place.', ruler: 'Baratheon \u2192 Lannister' },
    { name: 'Winterfell', region: 'The North', description: 'Ancient seat of House Stark. A massive fortress in the frozen North, built over hot springs that keep it warm.', ruler: 'House Stark' },
    { name: 'Casterly Rock', region: 'The Westerlands', description: 'Seat of House Lannister, built on gold mines that funded their immense wealth. A rock fortress overlooking the sea.', ruler: 'House Lannister' },
    { name: 'Dragonstone', region: 'Blackwater Bay', description: 'Volcanic island fortress. Ancestral seat of the Targaryens before they conquered Westeros. Used by Stannis, then Daenerys.', ruler: 'Targaryen \u2192 Baratheon \u2192 Targaryen' },
    { name: 'The Wall & Castle Black', region: 'The Far North', description: '700-foot wall of ice. Defended by the Night\'s Watch against wildlings and White Walkers. Jon Snow served here.', ruler: 'The Night\'s Watch' },
    { name: 'The Eyrie', region: 'The Vale of Arryn', description: 'Nearly impregnable castle high in the Mountains of the Moon. Known for its Moon Door (a hole in the floor for executions).', ruler: 'House Arryn' },
    { name: 'Highgarden', region: 'The Reach', description: 'Beautiful seat of House Tyrell. The most fertile region of Westeros, making the Tyrells extremely wealthy.', ruler: 'House Tyrell' },
    { name: 'Sunspear & Dorne', region: 'Dorne (Southernmost)', description: 'Hot, desert region. Dorne was never conquered by the Targaryens \u2014 they joined through marriage. Most culturally distinct kingdom.', ruler: 'House Martell' },
    { name: 'Pyke & The Iron Islands', region: 'Iron Islands', description: 'Harsh, rocky islands off the west coast. Home to reavers and raiders who follow the Drowned God.', ruler: 'House Greyjoy' },
    { name: 'Riverrun', region: 'The Riverlands', description: 'Seat of House Tully at the junction of rivers. Strategically important but frequently fought over.', ruler: 'House Tully' },
    { name: 'Storm\'s End', region: 'The Stormlands', description: 'Seat of House Baratheon. A massive, round castle said to be protected by magical wards against storms.', ruler: 'House Baratheon' },
    { name: 'The Twins (The Crossing)', region: 'The Riverlands', description: 'Two castles connected by a bridge. Seat of House Frey. Infamous site of the Red Wedding.', ruler: 'House Frey' },
  ]},
  { category: 'Essos \u2014 Across the Narrow Sea', places: [
    { name: 'Pentos', region: 'Free Cities', description: 'Where Daenerys and Viserys lived in exile with Illyrio Mopatis. Where Dany married Khal Drogo.' },
    { name: 'Vaes Dothrak', region: 'The Dothraki Sea', description: 'Only city of the Dothraki. Sacred place where no blood may be spilled. Home of the Dosh Khaleen (widowed khaleesis).' },
    { name: 'Qarth', region: 'Eastern Essos', description: '"The Greatest City That Ever Was." Daenerys came here after the Red Waste. Home to warlocks and merchants.' },
    { name: 'Astapor, Yunkai & Meereen', region: 'Slaver\'s Bay', description: 'Three slave cities Daenerys conquered and liberated. She ruled Meereen for several seasons. The Unsullied came from Astapor.' },
    { name: 'Braavos', region: 'Free Cities', description: 'Home of the Iron Bank and the Faceless Men (House of Black and White). Where Arya trained to become "No One."' },
    { name: 'Old Valyria', region: 'Ruins', description: 'Ancient homeland of the Targaryens and their dragons. Destroyed by the Doom \u2014 a cataclysmic volcanic event. Now cursed ruins.' },
  ]}
];

// ========== 13. SEASON EVENTS ==========
const seasonEvents = [
  { season: 1, title: 'Season 1', events: [
    { text: 'Ned Stark is executed by Joffrey', type: 'death', characters: ['eddard','joffrey'] },
    { text: 'Robert Baratheon killed by a boar (arranged by Cersei)', type: 'death', characters: ['robert','cersei'] },
    { text: 'Khal Drogo dies', type: 'death', characters: ['drogo'] },
    { text: 'Viserys killed by Drogo (molten gold)', type: 'death', characters: ['viserys','drogo'] },
    { text: 'Daenerys hatches three dragons from fire', type: 'milestone', characters: ['daenerys'] },
    { text: 'Jon Snow joins the Night\'s Watch', type: 'event', characters: ['jon'] },
    { text: 'Bran pushed from tower by Jaime, paralyzed', type: 'event', characters: ['bran','jaime'] },
    { text: 'Cersei\'s children revealed to be Jaime\'s, not Robert\'s', type: 'reveal', characters: ['cersei','jaime','joffrey','myrcella','tommen'] },
  ]},
  { season: 2, title: 'Season 2', events: [
    { text: 'Battle of the Blackwater \u2014 Stannis attacks King\'s Landing', type: 'battle', characters: ['stannis','tyrion'] },
    { text: 'Renly killed by Melisandre\'s shadow', type: 'death', characters: ['renly','melisandre','stannis'] },
    { text: 'Theon betrays Robb, seizes Winterfell', type: 'betrayal', characters: ['theon','robb'] },
    { text: 'Tyrion serves as acting Hand of the King', type: 'event', characters: ['tyrion'] },
    { text: 'Daenerys enters the House of the Undying in Qarth', type: 'event', characters: ['daenerys'] },
  ]},
  { season: 3, title: 'Season 3', events: [
    { text: 'The Red Wedding \u2014 Robb, Catelyn, and Talisa murdered by Freys/Boltons', type: 'death', characters: ['robb','catelyn','walder','roose'] },
    { text: 'Jaime loses his sword hand', type: 'event', characters: ['jaime'] },
    { text: 'Sansa forced to marry Tyrion', type: 'event', characters: ['sansa','tyrion'] },
    { text: 'Theon captured and tortured by Ramsay Bolton', type: 'event', characters: ['theon','ramsay'] },
    { text: 'Daenerys frees the Unsullied, gains Grey Worm', type: 'milestone', characters: ['daenerys','greyworm'] },
    { text: 'Missandei joins Daenerys', type: 'event', characters: ['missandei','daenerys'] },
    { text: 'Jon Snow infiltrates the Wildlings, meets Ygritte', type: 'event', characters: ['jon','ygritte'] },
  ]},
  { season: 4, title: 'Season 4', events: [
    { text: 'Joffrey poisoned at his own wedding (Purple Wedding)', type: 'death', characters: ['joffrey','olenna','margaery'] },
    { text: 'Tywin killed by Tyrion on the privy', type: 'death', characters: ['tywin','tyrion'] },
    { text: 'Oberyn Martell killed by The Mountain in trial by combat', type: 'death', characters: ['oberyn','mountain'] },
    { text: 'Ygritte killed during Wildling attack on Castle Black', type: 'death', characters: ['ygritte','jon'] },
    { text: 'Tyrion escapes King\'s Landing with Varys\' help', type: 'event', characters: ['tyrion','varys'] },
    { text: 'Arya and The Hound travel together', type: 'event', characters: ['arya','hound'] },
    { text: 'Bran reaches the Three-Eyed Raven beyond the Wall', type: 'milestone', characters: ['bran','bloodraven','hodor'] },
    { text: 'Lysa Arryn killed by Littlefinger (pushed through Moon Door)', type: 'death', characters: ['lysa','littlefinger'] },
  ]},
  { season: 5, title: 'Season 5', events: [
    { text: 'Jon Snow assassinated by the Night\'s Watch', type: 'death', characters: ['jon'] },
    { text: 'Shireen burned at the stake by Stannis/Melisandre', type: 'death', characters: ['shireen','stannis','melisandre'] },
    { text: 'Stannis defeated and killed', type: 'death', characters: ['stannis'] },
    { text: 'Sansa married to Ramsay Bolton, endures abuse', type: 'event', characters: ['sansa','ramsay'] },
    { text: 'Myrcella poisoned by Ellaria Sand in Dorne', type: 'death', characters: ['myrcella','ellaria'] },
    { text: 'Cersei\'s Walk of Shame', type: 'event', characters: ['cersei'] },
    { text: 'Arya arrives in Braavos, begins Faceless Men training', type: 'event', characters: ['arya','jaqen'] },
    { text: 'Selyse hangs herself after Shireen\'s death', type: 'death', characters: ['selyse'] },
  ]},
  { season: 6, title: 'Season 6', events: [
    { text: 'Jon Snow resurrected by Melisandre', type: 'milestone', characters: ['jon','melisandre'] },
    { text: 'Hodor sacrifices himself \u2014 "Hold the Door"', type: 'death', characters: ['hodor','bran'] },
    { text: 'Battle of the Bastards \u2014 Jon retakes Winterfell from Ramsay', type: 'battle', characters: ['jon','sansa','ramsay'] },
    { text: 'Ramsay Bolton killed (fed to his own hounds)', type: 'death', characters: ['ramsay','sansa'] },
    { text: 'Cersei destroys the Great Sept with wildfire, killing many', type: 'death', characters: ['cersei','margaery','loras','mace','highsparrow','kevan','lancel'] },
    { text: 'Tommen commits suicide after the Sept explosion', type: 'death', characters: ['tommen','cersei'] },
    { text: 'Walder Frey killed by Arya', type: 'death', characters: ['walder','arya'] },
    { text: 'Bran becomes the Three-Eyed Raven', type: 'milestone', characters: ['bran'] },
    { text: 'R+L=J confirmed \u2014 Jon is Rhaegar and Lyanna\'s son', type: 'reveal', characters: ['jon','rhaegar','lyanna'] },
    { text: 'Daenerys sails for Westeros with her army', type: 'milestone', characters: ['daenerys','tyrion'] },
    { text: 'Roose Bolton killed by Ramsay', type: 'death', characters: ['roose','ramsay'] },
    { text: 'Balon Greyjoy killed by Euron', type: 'death', characters: ['balon','euron'] },
    { text: 'Rickon killed by Ramsay during Battle of the Bastards', type: 'death', characters: ['rickon','ramsay'] },
    { text: 'Benjen sacrifices himself to save Jon beyond the Wall', type: 'death', characters: ['benjen','jon'] },
  ]},
  { season: 7, title: 'Season 7', events: [
    { text: 'Jon and Daenerys meet and eventually become lovers', type: 'event', characters: ['jon','daenerys'] },
    { text: 'Jon\'s true identity revealed: Aegon Targaryen, rightful heir', type: 'reveal', characters: ['jon','bran','samwell'] },
    { text: 'Rhaegar and Lyanna\'s secret marriage confirmed', type: 'reveal', characters: ['rhaegar','lyanna'] },
    { text: 'Olenna Tyrell dies (poisoned by Jaime), reveals she poisoned Joffrey', type: 'death', characters: ['olenna','jaime'] },
    { text: 'Littlefinger executed by the Starks', type: 'death', characters: ['littlefinger','arya','sansa'] },
    { text: 'The Night King destroys the Wall with an undead dragon', type: 'milestone', characters: ['nightking'] },
    { text: 'Ellaria Sand captured, forced to watch her daughter die', type: 'event', characters: ['ellaria','cersei'] },
    { text: 'Theon begins his redemption, rescues Yara', type: 'event', characters: ['theon','yara'] },
  ]},
  { season: 8, title: 'Season 8', events: [
    { text: 'Battle of Winterfell \u2014 Arya kills the Night King', type: 'battle', characters: ['arya','nightking'] },
    { text: 'Theon dies defending Bran', type: 'death', characters: ['theon','bran'] },
    { text: 'Jorah dies protecting Daenerys during the battle', type: 'death', characters: ['jorah','daenerys'] },
    { text: 'Melisandre dies after the Battle of Winterfell', type: 'death', characters: ['melisandre'] },
    { text: 'Missandei executed by Cersei', type: 'death', characters: ['missandei','cersei'] },
    { text: 'The Hound and The Mountain kill each other (Cleganebowl)', type: 'death', characters: ['hound','mountain'] },
    { text: 'Daenerys destroys King\'s Landing, killing thousands', type: 'event', characters: ['daenerys'] },
    { text: 'Cersei and Jaime die together as the Red Keep collapses', type: 'death', characters: ['cersei','jaime'] },
    { text: 'Varys executed by Daenerys for treason', type: 'death', characters: ['varys','daenerys'] },
    { text: 'Jon kills Daenerys to stop her tyranny', type: 'death', characters: ['daenerys','jon'] },
    { text: 'Bran chosen as King of the Six Kingdoms', type: 'milestone', characters: ['bran','tyrion'] },
    { text: 'Sansa crowned Queen in the North', type: 'milestone', characters: ['sansa'] },
    { text: 'Jon exiled beyond the Wall', type: 'event', characters: ['jon'] },
    { text: 'Arya sails west of Westeros to explore', type: 'event', characters: ['arya'] },
    { text: 'Tyrion becomes Hand of the King to Bran', type: 'event', characters: ['tyrion','bran'] },
    { text: 'Bronn named Lord of Highgarden and Master of Coin', type: 'event', characters: ['bronn'] },
    { text: 'Brienne named Lord Commander of the Kingsguard', type: 'event', characters: ['brienne'] },
    { text: 'Euron killed by Jaime', type: 'death', characters: ['euron','jaime'] },
    { text: 'Qyburn killed by The Mountain', type: 'death', characters: ['qyburn','mountain'] },
  ]}
];

// ========== 14. HELPER: applyAliases ==========
function applyAliases(target, source) {
  for (const [alias, base] of Object.entries(cardAliases)) {
    if (source[base] !== undefined) target[alias] = source[base];
  }
}

// Apply aliases to data objects
applyAliases(characters, characters);
applyAliases(deathSeason, deathSeason);
deathSeason.jon2 = undefined; // Jon doesn't die permanently
applyAliases(bioSafeUpTo, bioSafeUpTo);
applyAliases(galleryImages, galleryImages);

// ========== 15. OVERVIEW HOUSES CONFIG ==========
const overviewHouses = [
  {id:'stark',name:'Stark',sigil:'\u{1F43A}',section:'sec-stark',color:'var(--stark)'},
  {id:'lannister',name:'Lannister',sigil:'\u{1F981}',section:'sec-lannister',color:'var(--lannister)'},
  {id:'targaryen',name:'Targaryen',sigil:'\u{1F409}',section:'sec-targaryen',color:'var(--targaryen)'},
  {id:'baratheon',name:'Baratheon',sigil:'\u{1F98C}',section:'sec-baratheon',color:'var(--baratheon)'},
  {id:'greyjoy',name:'Greyjoy',sigil:'\u{1F991}',section:'sec-greyjoy',color:'var(--greyjoy)'},
  {id:'tyrell',name:'Tyrell',sigil:'\u{1F339}',section:'sec-tyrell',color:'var(--tyrell)'},
  {id:'martell',name:'Martell',sigil:'\u2600\uFE0F',section:'sec-martell',color:'var(--martell)'},
  {id:'tully',name:'Tully & Arryn',sigil:'\u{1F41F}',section:'sec-tully',color:'var(--tully)'},
  {id:'blackfyre',name:'Blackfyre',sigil:'\u{1F409}',section:'sec-blackfyre',color:'var(--blackfyre)'},
];
