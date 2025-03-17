const basicQuestions = [
  {
    question: "Who created the heavens and the earth?",
    choices: ["Moses", "Paul", "God", "Peter"],
    answer: 3,
  },
  {
    question: "What is the first book of the Bible?",
    choices: ["Psalms", "Genesis", "Matthew", "Revelation"],
    answer: 2,
  },
  {
    question: "Who built the ark to survive the flood?",
    choices: ["Abraham", "Noah", "David", "Solomon"],
    answer: 2,
  },
  {
    question: "Who led the Israelites out of Egypt?",
    choices: ["Joshua", "Elijah", "Moses", "Aaron"],
    answer: 3,
  },
  {
    question: "What is the name of Jesus's mother?",
    choices: ["Elizabeth", "Sarah", "Mary", "Martha"],
    answer: 3,
  },
  {
    question: "How many disciples did Jesus have?",
    choices: ["10", "12", "7", "15"],
    answer: 2,
  },
  {
    question: "What did Jesus turn water into at a wedding in Cana?",
    choices: ["Milk", "Oil", "Wine", "Honey"],
    answer: 3,
  },
  {
    question: "What is the shortest verse in the Bible?",
    choices: [
      "'Jesus wept.'",
      "'God is love.'",
      "'The Lord is my shepherd.'",
      "'Rejoice always.'",
    ],
    answer: 1,
  },
  {
    question: "Who betrayed Jesus for 30 pieces of silver?",
    choices: ["Judas Iscariot", "Peter", "John", "Thomas"],
    answer: 1,
  },
  {
    question: "What happened on the third day after Jesus was crucified?",
    choices: [
      "He remained in the tomb",
      "He ascended to heaven",
      "He rose from the dead",
      "His body was stolen",
    ],
    answer: 3,
  },
];

const s2sQuestions = [
  {
    question: "מי ברא את השמים והארץ?",
    choices: ["משה", "פולוס", "אלוהים", "פטרוס"],
    answer: 2,
  },
  {
    question: "מהי הבשורה?",
    choices: [
      "הסיפור על חיי ישוע",
      "ההכרזה על גאולת העולם דרך ישוע",
      "אוסף חוקים דתיים",
      "תורה שניתנה למשה",
    ],
    answer: 1,
  },
  {
    question: "כיצד ניתנת הישועה?",
    choices: [
      "על ידי מעשים טובים בלבד",
      "על ידי חסד דרך אמונה בישוע",
      "על ידי שמירת כל המצוות",
      "על ידי פולחן במקדש",
    ],
    answer: 1,
  },
  {
    question: "מהי הלידה החדשה?",
    choices: [
      "שינוי פנימי על ידי קבלת ישוע",
      "התחלה חדשה לאחר כישלון",
      "הצטרפות לכנסייה",
      "ברית מילה רוחנית",
    ],
    answer: 0,
  },
  {
    question: "מדוע אפשר להיות בטוחים בישועה?",
    choices: [
      "בגלל המעשים שלנו",
      "כי היא מבוססת על הבטחות אלוהים",
      "כי הכנסייה מבטיחה זאת",
      "בגלל הקורבנות שאנחנו מקריבים",
    ],
    answer: 1,
  },
  {
    question: "מה נותנת האמונה בישוע?",
    choices: [
      "חופש רוחני וסמכות כבני אלוהים",
      "יכולת לשלוט באחרים",
      "חיים ללא אתגרים",
      "עושר חומרי",
    ],
    answer: 0,
  },
  {
    question: "כיצד הישועה משפיעה על מערכות היחסים שלנו?",
    choices: [
      "אין לה השפעה ממשית",
      "היא משפרת את היחסים עם אלוהים, אחרים, ועם עצמנו",
      "היא גורמת לניתוק מאנשים שלא מאמינים",
      "היא מחייבת אותנו להתבודד מהעולם",
    ],
    answer: 1,
  },
  {
    question: "איך ניתן לפתח מערכת יחסים עם אלוהים?",
    choices: [
      "על ידי תפילה, לימוד דברו, והליכה באמונה יומיומית",
      "על ידי ביקור בכנסייה בלבד",
      "על ידי ביצוע מצוות בלבד",
      "על ידי התרחקות מחברה",
    ],
    answer: 0,
  },
  {
    question: "מהי משמעות סעודת האדון?",
    choices: [
      "אירוע לזכר אליהו הנביא",
      "טקס המתקיים רק בפסח",
      "זיכרון לקורבנו של ישוע וסמל לגופו ודמו",
      "חגיגה לכבוד הקדושים",
    ],
    answer: 2,
  },
  {
    question: "מהי מטרת החניכה הרוחנית?",
    choices: [
      "להפוך מאמינים חדשים למנהיגים פוליטיים",
      "להדריך מאמינים חדשים, לעזור להם לצמוח באמונה ולהפיץ את הבשורה",
      "ליצור הפרדה בין מאמינים ללא מאמינים",
      "להכין אנשים לשירות צבאי",
    ],
    answer: 1,
  },
  {
    question: "מדוע חניכה רוחנית חשובה?",
    choices: [
      "כי היא מספקת תמיכה ומונעת סטייה מהדרך",
      "כי היא מספקת מעמד חברתי גבוה יותר",
      "כי היא מחייבת אותנו לחיים ללא הנאות",
      "כי בלעדיה לא ניתן לקבל ישועה",
    ],
    answer: 0,
  },
  {
    question: "מה עלול לקרות בהיעדר חניכה רוחנית?",
    choices: [
      "המאמין עלול להישאר חלש באמונה, להתמודד עם ספקות ולהיות פגיע לנפילה רוחנית",
      "המאמין יהפוך לרוחני יותר בעצמו",
      "אין לכך השפעה",
      "המאמין יקבל ישועה מהירה יותר",
    ],
    answer: 0,
  },
  {
    question: "מהי מטרת החניכה והכשרת תלמידים?",
    choices: [
      "לשמור את הידע בתוך קבוצה סגורה",
      "ללמד מאמינים חדשים ולחזק את הדור הבא של תלמידי ישוע",
      "להגדיל את מספר האנשים בכנסייה בלבד",
      "ליצור מערכת חוקים מחייבת",
    ],
    answer: 1,
  },
  {
    question: "מהו תהליך החניכה האישית?",
    choices: [
      "עבודה פנימית על ריפוי מכאבי העבר ושחרור לחיים מלאים ברוח הקודש",
      "סדנאות קבוצתיות למתמודדים עם קשיים",
      "תפילה קבועה עם המנהיגים הרוחניים",
      "עבודה פיזית עם קבוצה",
    ],
    answer: 0,
  },
  {
    question: "מהו המושג 'חניכה לחניכה'?",
    choices: [
      "קבלה של אנשים חדשים לכנסייה",
      "העברת ידע ואמונה לאחרים כדי שהם יפיצו את הבשורה",
      "הכשרת אנשים לפולחן דתי",
      "הקניית מיומנויות מקצועיות",
    ],
    answer: 1,
  },
  {
    question: "איך ישוע הדריך?",
    choices: [
      "באמצעות חוקים ומצוות",
      "באמצעות אהבה, הבנה עמוקה ודוגמא אישית",
      "באמצעות מתנות חומריות",
      "באמצעות שליטה וכוח",
    ],
    answer: 1,
  },
  {
    question: "מה המשמעות של להדריך?",
    choices: [
      "לתמוך ולהוביל אנשים בדרך האמונה ולעזור להם בצמיחה הרוחנית",
      "לספק למאמינים ידע תיאורטי בלבד",
      "לאפשר למאמינים לקבל חוקים בלבד",
      "לשלול ממאמינים את כל הרצונות האישיים שלהם",
    ],
    answer: 0,
  },
  {
    question: "מה דרוש להפצת הבשורה?",
    choices: [
      "הכנה רוחנית, ידע בדבר אלוהים והבנה של הצרכים האישיים של כל אדם",
      "רק ידע תיאולוגי",
      "הכנה פוליטית והבנה של משטרים",
      "הכנה גופנית בלבד",
    ],
    answer: 0,
  },
  {
    question: "מהי חשיבות עדות אישית להפצת הבשורה?",
    choices: [
      "היא מראה כיצד אלוהים עובד בחיים של אנשים",
      "היא הדרך להפוך אנשים למאמינים",
      "היא רק דרך להראות צדדים שליליים של החיים",
      "היא מצריכה אישורים משפטיים",
    ],
    answer: 0,
  },
  {
    question: "מהו היתרון של תפילה ולימוד דבר ה' יחד?",
    choices: [
      "זה מביא להבנה עמוקה יותר של אלוהים ולחיים קרובים אליו",
      "זה מאפשר למאמינים לעבוד רק עם טקסטים דתיים",
      "זה יוצר אינטראקציה עם הקהל",
      "זה מונע שאלות ותהיות",
    ],
    answer: 0,
  },
  {
    question: "מהם החיים המבוססים על תפילה?",
    choices: [
      "חיים של חיבור תמידי עם אלוהים, קבלת הדרכה וחיזוק רוחני",
      "חיים של שמירה על מצוות בלבד",
      "חיים של עשייה ללא קשר רוחני",
      "חיים של לימוד תורה בלבד",
    ],
    answer: 0,
  },
  {
    question: "מהי תפילה קהילתית?",
    choices: [
      "תפילה אישית בפני אלוהים",
      "תפילה כחלק מהתאספות מאמינים",
      "תפילה המתקיימת רק ביום שבת",
      "תפילה בהשתתפות הכומר בלבד",
    ],
    answer: 1,
  },
  {
    question: "מהי תפילה בלשונות?",
    choices: [
      "תפילה בשפה זרה שאינה מובנת למתפלל",
      "תפילה בהבנה מלאה של כל מילה",
      "תפילה בשפת המלאכים, המאפשרת חיבור לרוח הקודש",
      "תפילה בסגנון דתי מסורתי",
    ],
    answer: 2,
  },
  {
    question: "מהי חשיבות התפילה בשגרה יומית?",
    choices: [
      "תפילה היא נשק רוחני ויש לשמור עליה כל יום",
      "אין צורך בתפילה אם אין קהל",
      "תפילה נדרשת רק במצבים קשים",
      "התפילה אינה נדרשת אם אנו חיים לפי מצוות",
    ],
    answer: 0,
  },
  {
    question: "מהו סדר עדיפויות מאמין נכון?",
    choices: [
      "לשים את אלוהים ומלכותו בראש סדר העדיפויות",
      "לשים את העבודה והקריירה בראש סדר העדיפויות",
      "לשים את חיי המשפחה בראש סדר העדיפויות",
      "לשים את נוחות אישית בראש סדר העדיפויות",
    ],
    answer: 0,
  },
  {
    question: "מהו עקרון האחריות ההדדית?",
    choices: [
      "מאמינים נושאים בעול אחד של השני ועוזרים זה לזה בצמיחה הרוחנית",
      "מאמינים עוזרים רק למי שמבקש עזרה",
      "אין צורך לשתף פעולה עם אחרים בכנסייה",
      "כל אחד אחראי רק לצרכיו האישיים",
    ],
    answer: 0,
  },
  {
    question: "מהו המושג 'חיים קדושים'?",
    choices: [
      "חיים המוקדשים לאלוהים ולמצוותיו",
      "חיים ללא חוקים",
      "חיים בהם אנו מקבלים את כל הרצונות שלנו",
      "חיים המתמקדים במילוי דרישות חברתיות",
    ],
    answer: 0,
  },
  {
    question: "מהו עקרון יציבות רוחנית לאורך זמן?",
    choices: [
      "יציבות באמונה דורשת מחויבות ללימוד דבר ה', תפילה, וחיים לפי רוח הקודש",
      "יציבות דורשת שמירה על מצוות בלבד",
      "יציבות אינה דורשת מחויבות רוחנית",
      "היציבות היא תוצאה של עבודה קשה בלבד",
    ],
    answer: 0,
  },
  {
    question: "כיצד יש להתמודד עם קשיים רוחניים?",
    choices: [
      "יש להתמודד איתם באמונה ובתפילה",
      "יש להימנע מהם בכל מחיר",
      "יש להתעלם מהם וללכת בדרך הקלה",
      "יש להאשים את האחרים בקשיים",
    ],
    answer: 0,
  },
  {
    question: "מהם הפיתויים והניסיונות שהמאמינים נתקלים בהם?",
    choices: [
      "המאמינים נתקלים בפיתויים וניסיונות שהם חלק מהחיים הרוחניים",
      "המאמינים לא נתקלים בשום פיתויים",
      "הפיתויים הם רק תוצאה של חוסר אמונה",
      "הפיתויים אינם חשובים לאמונה",
    ],
    answer: 0,
  },
  {
    question: "מהי מלחמה רוחנית?",
    choices: [
      "החיים הרוחניים הם זירה של מאבק רוחני, בו עלינו לעמוד איתנים נגד כוחות החושך",
      "אין צורך במלחמה רוחנית, הכול בהשפעת אלוהים",
      "המלחמה הרוחנית היא רק עבור מנהיגים",
      "המלחמה הרוחנית אינה קשורה לאמונה",
    ],
    answer: 0,
  },
  {
    question: "מהו גירוש שדים?",
    choices: [
      "בשם ישוע ובכוח הרוח הקודש ניתן לשחרר אנשים מכבלים רוחניים ושדים",
      "גירוש שדים הוא לא חלק מהחיים הרוחניים",
      "גירוש שדים מתרחש רק דרך טיפול רפואי",
      "גירוש שדים הוא עניין של מדע בלבד",
    ],
    answer: 0,
  },
  {
    question: "מהו החזון של קהילת 'ניצלתי כדי להציל'?",
    choices: [
      "הקהילה מבוססת על הרעיון שהניצולים על ידי ישוע מחויבים להביא אחרים לישועה",
      "החזון הוא רק לעזור למאמינים לשמור על מצוות",
      "החזון הוא לעסוק רק בתפילה ללא עבודת חסד",
      "הקהילה פועלת רק במעגלים קטנים ולא משפיעה החוצה",
    ],
    answer: 0,
  },
  {
    question: "מהי מטרת ההדרכה וההתלמדות באמונה?",
    choices: [
      "ההדרכה הרוחנית שואפת לחזק את המאמינים ולהכינם למשימת הפצת הבשורה",
      "ההדרכה נועדה רק למנהיגים רוחניים",
      "ההדרכה היא רק לימוד תיאורטי ולא מעשי",
      "ההדרכה מיועדת רק למי שמבקש ללמוד",
    ],
    answer: 0,
  },
  {
    question: "מהו עקרון מנהיגות רוחנית והובלת קבוצות?",
    choices: [
      "מנהיגות באמונה דורשת דוגמא אישית, חכמה, ושירות מתוך ענווה",
      "מנהיגות רוחנית דורשת שליטה מוחלטת על חברי הקבוצה",
      "מנהיגות רוחנית אינה דורשת קשר אישי עם חברי הקבוצה",
      "מנהיגות היא ניהול בלבד, ולא מחויבת לעקרונות רוחניים",
    ],
    answer: 0,
  },
  {
    question: "מהו צום תפילה מרתון של 12 שעות?",
    choices: [
      "זמן מוקדש להתעמקות בתפילה, חיזוק רוחני, ולימוד מרוכז לסיכום הדרך",
      "צום תפילה הוא זמן של מנוחה בלבד",
      "צום תפילה מתבצע רק בשבתות",
      "צום תפילה הוא הכנה לאירועים דתיים בלבד",
    ],
    answer: 0,
  },
];

const frontendInterviewQuestions = [
  {
    question: "What is the difference between `==` and `===` in JavaScript?",
    choices: [
      "No difference",
      "Type coercion vs. strict equality",
      "Scope differences",
      "Memory allocation differences",
    ],
    answer: 2,
  },
  {
    question: "What is the purpose of the `useEffect` hook in React?",
    choices: [
      "Managing state",
      "Handling events",
      "Performing side effects",
      "Rendering components",
    ],
    answer: 3,
  },
  {
    question:
      "What is the difference between `let`, `const`, and `var` in JavaScript?",
    choices: [
      "No difference",
      "Scope and reassignment differences",
      "Performance differences",
      "Syntax differences",
    ],
    answer: 2,
  },
  {
    question:
      "What is the purpose of the `map()` function in JavaScript arrays?",
    choices: [
      "Filtering elements",
      "Reducing elements",
      "Iterating elements",
      "Transforming elements",
    ],
    answer: 4,
  },
  {
    question: "What is the DOM in web development?",
    choices: [
      "Document Object Model",
      "Data Object Model",
      "Design Object Model",
      "Dynamic Object Model",
    ],
    answer: 1,
  },
  {
    question: "What is the purpose of `async/await` in JavaScript?",
    choices: [
      "Synchronous code execution",
      "Handling promises asynchronously",
      "Declaring variables",
      "Defining functions",
    ],
    answer: 2,
  },
  {
    question:
      "What is the difference between `null` and `undefined` in JavaScript?",
    choices: [
      "No difference",
      "Value vs. absence of value",
      "Type differences",
      "Memory differences",
    ],
    answer: 2,
  },
  {
    question: "What is the purpose of the `useState` hook in React?",
    choices: [
      "Managing side effects",
      "Managing state within functional components",
      "Handling events",
      "Rendering components",
    ],
    answer: 2,
  },
  {
    question: "What is the purpose of CSS Flexbox?",
    choices: [
      "Styling text",
      "Creating responsive layouts",
      "Handling events",
      "Animating elements",
    ],
    answer: 2,
  },
  {
    question:
      "What is the purpose of the `reduce()` function in JavaScript arrays?",
    choices: [
      "Filtering elements",
      "Transforming elements",
      "Reducing elements to a single value",
      "Iterating elements",
    ],
    answer: 3,
  },
  {
    question: "What is a closure in JavaScript?",
    choices: [
      "A way to close browser tabs",
      "A combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment).",
      "A type of loop",
      "A way to handle errors",
    ],
    answer: 2,
  },
  {
    question: "What is event bubbling in the DOM?",
    choices: [
      "An error handling technique",
      "The propagation of events from the target element to its ancestors",
      "A way to style elements",
      "A method for creating animations",
    ],
    answer: 2,
  },
  {
    question: "What is the purpose of a virtual DOM in React?",
    choices: [
      "To improve performance by minimizing direct DOM manipulation",
      "To handle server-side rendering",
      "To create animations",
      "To manage state",
    ],
    answer: 1,
  },
  {
    question: "What is the purpose of `localStorage` in web browsers?",
    choices: [
      "Storing session data",
      "Storing persistent data in the browser",
      "Handling cookies",
      "Managing server-side data",
    ],
    answer: 2,
  },
  {
    question: "What is the purpose of a promise in JavaScript?",
    choices: [
      "To handle synchronous operations",
      "To handle asynchronous operations and their eventual completion or failure",
      "To declare variables",
      "To define functions",
    ],
    answer: 2,
  },
];

localStorage.setItem("s2sQuestions", JSON.stringify(s2sQuestions));
localStorage.setItem("basicQuestions", JSON.stringify(basicQuestions));
localStorage.setItem("interview", JSON.stringify(frontendInterviewQuestions));
