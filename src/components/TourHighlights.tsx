
import React from 'react';

const TourHighlights = () => {
  return (
    <section className="tour-section bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8 opacity-0 animate-fade-in">
          <h3 className="text-2xl font-bold mb-4 text-tour-dark">✨</h3>
          <p className="tour-text">
            הצטרפו אליי למסע מרתק ומרגש במיוחד –<br />
            לא עוד סתם טיול, אלא חוויה עמוקה של חיבור אנושי,<br />
            סיפור ותרבות בלב הטבע הפראי של הגליל.
          </p>
          <p className="tour-text mt-4">
            זהו מסע אל הפסיפס האנושי של הגליל התחתון –<br />
            שבו כל אבן, כל כפר, וכל דמות מספרים פרק אחר<br />
            בסיפור המופלא של המקום הזה,<br />
            שמחבר בין דתות, עמים, תקופות ואמונות.
          </p>
        </div>

        <div className="mt-10 p-6 bg-tour-light rounded-lg shadow-sm opacity-0 animate-fade-in-delay-1">
          <h3 className="text-xl font-bold mb-4 text-tour-primary">📍 פרטים חשובים:</h3>
          <ul className="space-y-2">
            <li>- מתי: יום שישי, 16.5</li>
            <li>- שעה: 09:00</li>
            <li>- נקודת מפגש: פסגת הר תבור</li>
            <li>- תחבורה: ברכבים פרטיים</li>
            <li>- מחיר: 150 ש"ח לאדם (כולל כניסות לאתרים)</li>
            <li>- ההרשמה מראש חובה</li>
          </ul>
        </div>

        <div className="mt-10 flex justify-center opacity-0 animate-fade-in-delay-2">
          <span className="text-tour-dark text-lg md:text-xl font-bold flex items-center gap-2">
            <span role="img" aria-label="צ'אט">💬</span>
            רוצים להירשם? פשוט לחצו על הכפתור הירוק
            <span role="img" aria-label="סמיילי">😊</span>
          </span>
        </div>
      </div>
    </section>
  );
};

export default TourHighlights;
