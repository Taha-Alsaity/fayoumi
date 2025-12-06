import React, { useState, useEffect, useRef } from 'react';
import './About.css';
import abtimg from '../assets/view3.jpg';

const About = () => {
  const statsData = [
    { id: 1, label: "معدل الأنتاج السنوي", value: 125000 },
    { id: 2, label: "معدل الأنتاج اليومي", value: 400 },
    { id: 3, label: "سنة التأسيس", value: 2019 },
  ];

  return (
    <section id="about" className="modern-about">
      <div className="modern-container">
        {/* نص */}
        <div className="modern-text">
          <h2>من نحن</h2>
          <p>تأسست شركة فيومي للأعلاف سنة 2019 برؤية واضحة لبناء منظومة أعلاف حديثة تُواكب المعايير العالمية وتدعم قطاع الثروة الحيوانية في ليبيا.
ومنذ انطلاقتها، نجحت فيومي في ترسيخ مكانتها كواحدة من أسرع الشركات نموًا وأكثرها ثقة بين المربين، بفضل التزامها الثابت بتقديم أعلاف عالية الجودة، دقيقة التركيب، ومتوازنة غذائيًا، تضمن أفضل أداء وإنتاجية لجميع أنواع الحيوانات.

تعمل فيومي وفق مواصفات عالمية تم إعدادها واعتمادها من خبراء هولنديين متخصصين في تغذية الحيوان، مما يمنح منتجاتنا ثباتًا في الجودة ونتائج ملموسة على أرض الواقع، ويجعل معايير التصنيع لدينا توازي أفضل المصانع العالمية.

          </p>
        </div>

        {/* صورة */}
        <div className="modern-image">
          <img src={abtimg} alt="فريقنا" />
        </div>
      </div>

<div className="stats-container">
  {statsData.map((stat) => (
    <StatCard key={stat.id} id={stat.id} label={stat.label} value={stat.value} />
  ))}
</div>

    </section>
  );
};

function StatCard({ label, value, id }) {
  const [count, setCount] = useState(0);
  const [startCount, setStartCount] = useState(false);
  const ref = useRef();

  // Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCount(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  // Count-up effect
  useEffect(() => {
    if (!startCount) return;

    let start = 0;
    const duration = 2000;
    const increment = value / (duration / 50);

    const counter = setInterval(() => {
      start += increment;
      if (start >= value) {
        start = value;
        clearInterval(counter);
      }
      setCount(Math.floor(start));
    }, 50);

    return () => clearInterval(counter);
  }, [startCount, value]);

  return (
    <div className="stat-card" ref={ref}>
      <h3>
        {count} {id === 1 || id === 2 ? <span>طن</span> : <span>م</span> }
      </h3>
      <p>{label}</p>
    </div>
  );
}


export default About;
