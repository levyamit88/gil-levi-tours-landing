import React from 'react';
import { AspectRatio } from "@/components/ui/aspect-ratio";
const tourHeader = <div className="flex flex-col items-center mb-8 mt-0">
    <div className="w-44 h-auto md:w-60 rounded-xl overflow-hidden shadow-lg bg-gray-200 mx-auto mb-6 animate-fade-in" style={{
    maxWidth: '100%',
    aspectRatio: '9/16'
  }}>
      <AspectRatio ratio={9 / 16}>
        <img src="/lovable-uploads/46492dab-c7e4-457b-a24d-a3e3d660e583.png" alt="Gil Levy - מורה דרך" className="w-full h-full object-cover object-center" style={{
        aspectRatio: '9/16'
      }} />
      </AspectRatio>
    </div>
    <h1 className="font-bold text-tour-dark text-3xl md:text-4xl lg:text-5xl text-center mb-3 animate-fade-in" style={{
    lineHeight: 1.25
  }}>
      🥾 הצטרפו אליי לטיול יחיד ומיוחד<br />
      דתות ותרבויות בגליל התחתון<br />
      <span className="font-semibold text-tour-secondary block text-xl md:text-2xl not-italic">
        יום שישי | 16.5 | שעה 09:00 | פסגת הר תבור
      </span>
    </h1>
  </div>;
const mainHebrewContent = <section className="max-w-2xl mx-auto text-right rtl flex flex-col gap-2 text-[#282828] px-4 md:px-0">
    <p className="text-xl font-semibold mb-4 animate-fade-in opacity-0 animate-fade-in-delay-1">🌿 יש טיולים שלא מפספסים. נקודה.</p>
    <p className="text-lg mb-6 animate-fade-in">קחו מקל, קחו תרמיל, והצטרפו אליי לטיול מרתק ומרגש בגליל!</p>
    <p className="mb-5 animate-fade-in-delay-1">
      <span>
        בואו לגלות את הפסיפס האנושי והתרבותי של הגליל התחתון –<br />
        מסע בין דתות, תרבויות וסיפורים נדירים שחוצים גבולות, אמונות ויבשות.
      </span>
    </p>
    <p className="font-bold mt-6 mb-2 animate-fade-in-delay-2 text-tour-dark text-lg md:text-xl">
      🚩 תחנות במסע:
    </p>
    <div className="mb-3 animate-fade-in-delay-3">
      <div>
        <span className="font-bold text-tour-secondary">⛰ הר תבור</span><br />
        המסע יתחיל בפסגת התבור – בעונה הכי יפה של השנה, כשהכול ירוק.<br />
        נספר את סיפורו של הר חוצה דתות ואמונות:<br />
        - דבורה ואבינועם<br />
        - סיסרא והיתד<br />
        - ישוע הנצרתי והכנסייה המרהיבה שניצבת שם
      </div>
      <div className="mt-6">
        <span className="font-bold text-tour-secondary">🏔 מהגליל... אל הרי הקווקז</span><br />
        נמשיך אל כפר כמא – ונצלול אל סיפורו של עם מרתק:<br />
        הצ’רקסים – עם קדום מארץ רחוקה, שחלומו לחזור אל מולדתו<br />
        ונמצא את עצמו כאן, בלב שממת הגליל
      </div>
      <div className="mt-6">
        <span className="font-bold text-tour-secondary">🏠 סג'רה של פעם, אילניה של היום</span><br />
        משם נמשיך למושבות הגליל התחתון, ונפגוש:<br />
        - את אנשי העליות<br />
        - את הסובוטניקים<br />
        - את סיפורם של משפחת שמואלי<br />
        מסע בין נהר הוולגה שברוסיה לשדות הגליל, דרך נחישות, אמונה, ומפ��ש בין תרבויות.
      </div>
    </div>

    <p className="font-bold mt-8 text-tour-dark text-lg">✨</p>
    <p className="mb-2 animate-fade-in-delay-2">
      הצטרפו אליי למסע מרתק ומרגש במיוחד –<br />
      לא עוד סתם טיול, אלא חוויה עמוקה של חיבור אנושי,<br />
      סיפור ותרבות בלב הטבע הפראי של הגליל.
    </p>
    <p className="mb-6 animate-fade-in-delay-2">
      זהו מסע אל הפסיפס האנושי של הגליל התחתון –<br />
      שבו כל אבן, כל כפר, וכל דמות מספרים פרק אחר<br />
      בסיפור המופלא של המקום הזה,<br />
      שמחבר בין דתות, עמים, תקופות ואמונות.
    </p>
    <div className="rounded-lg bg-tour-light px-6 py-6 my-6 shadow-sm animate-fade-in-delay-3">
      <span className="font-bold text-tour-primary block mb-4">📍 פרטים חשובים:</span>
      <ul className="space-y-1 pr-5">
        <li>- מתי: יום שישי, 16.5</li>
        <li>- שעה: 09:00</li>
        <li>- נקודת מפגש: פסגת הר תבור</li>
        <li>- תחבורה: ברכבים פרטיים</li>
        <li>- מחיר: 150 ש"ח לאדם (כולל כניסות לאתרים)</li>
        <li>- ההרשמה מראש חובה</li>
      </ul>
    </div>
    <div className="mt-4 text-center animate-fade-in-delay-2">
      <span className="font-bold text-tour-dark text-lg mb-1">📲 לפרטים והצטרפות:</span>
      <p className="mb-0 text-base">מלאו את הפרטים בטופס 👇<br />או שלחו לי הודעה בוואטסאפ 💬</p>
    </div>
  </section>;
const HeroSection = () => {
  return <section className="w-full pt-8 pb-4 bg-gradient-to-b from-tour-light to-white">
      {tourHeader}
      {mainHebrewContent}
    </section>;
};
export default HeroSection;