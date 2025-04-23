
import React from 'react';

const TourDetails = () => {
  return (
    <section className="tour-section bg-white">
      <div className="max-w-4xl mx-auto">
        <p className="tour-text opacity-0 animate-fade-in-delay-1">
          בואו לגלות את הפסיפס האנושי והתרבותי של הגליל התחתון –<br />
          מסע בין דתות, תרבויות וסיפורים נדירים שחוצים גבולות, אמונות ויבשות.
        </p>
        
        <h3 className="text-2xl font-bold mt-10 mb-4 text-tour-dark opacity-0 animate-fade-in-delay-2">
          🚩 תחנות במסע:
        </h3>
        
        <div className="mb-8 opacity-0 animate-fade-in-delay-2">
          <h4 className="text-xl font-bold mb-2 text-tour-secondary">⛰ הר תבור</h4>
          <p className="tour-text">
            המסע יתחיל בפסגת התבור – בעונה הכי יפה של השנה, כשהכול ירוק.<br />
            נספר את סיפורו של הר חוצה דתות ואמונות:<br />
            - דבורה ואבינועם<br />
            - סיסרא והיתד<br />
            - ישוע הנצרתי והכנסייה המרהיבה שניצבת שם
          </p>
        </div>
        
        <div className="mb-8 opacity-0 animate-fade-in-delay-2">
          <h4 className="text-xl font-bold mb-2 text-tour-secondary">🏔 מהגליל... אל הרי הקווקז</h4>
          <p className="tour-text">
            נמשיך אל כפר כמא – ונצלול אל סיפורו של עם מרתק:<br />
            הצ'רקסים – עם קדום מארץ רחוקה, שחלומו לחזור אל מולדתו<br />
            ונמצא את עצמו כאן, בלב שממת הגליל
          </p>
        </div>
        
        <div className="mb-8 opacity-0 animate-fade-in-delay-3">
          <h4 className="text-xl font-bold mb-2 text-tour-secondary">🏠 סג'רה של פעם, אילניה של היום</h4>
          <p className="tour-text">
            משם נמשיך למושבות הגליל התחתון, ונפגוש:<br />
            - את אנשי העליות<br />
            - את הסובוטניקים<br />
            - את סיפורם של משפחת שמואלי<br />
            מסע בין נהר הוולגה שברוסיה לשדות הגליל, דרך נחישות, אמונה, ומפגש בין תרבויות.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TourDetails;
