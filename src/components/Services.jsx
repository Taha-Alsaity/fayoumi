import React, { useEffect } from "react";
import "./Services.css";
import icon1 from '../assets/prod1.jpg'
import icon2 from '../assets/prod2.jpg'
import icon3 from '../assets/prod3.jpg'
const Services = () => {
  useEffect(() => {
    

   
    const serviceCards = document.querySelectorAll(".service-card");
    serviceCards.forEach((card, index) => {
      card.style.opacity = "0";
      card.style.transform = "translateY(20px)";

      setTimeout(() => {
        card.style.transition = "opacity 0.5s ease, transform 0.5s ease";
        card.style.opacity = "1";
        card.style.transform = "translateY(0)";
      }, 100 * (index + 1));
    });
  }, []);

  return (
    <div className=" service-container">

      <div className="services-grid">
        
        {servicesData.map((service, index) => (
          <div
            className={`service-card ${service.pulse ? "pulse" : ""}`}
            key={index}
          >
            <div className="service-icon">
            <img src={service.icon} alt="" />
            </div>

            <h3 className="service-title">{service.title}</h3>
            

          
            <p className="service-details">
             

             
           {service.details}
             
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};


const servicesData = [
  {
    title: "علف دواجن لحم",
    icon: icon1,
   details:  "  تركيبة عالمية محسوبة علميًا لضمان نمو سريع، وزن مثالي، ومعدل تحويل ممتاز مصمم ليمنح الطائر طاقة عالية وبروتينات سهلة الهضم تدعم قوة العضلات وصحة الجهاز المناعي. ",
  },
  {
    title: "علف الأغنام",
    icon: icon2,
    
    details:
      "مصمم لرفع معدلات التسمين واستجابة الهضم، بتوازن مثالي بين الطاقة والألياف، لضمان لحم بجودة أعلى ونمو سريع خصوصًا للأغنام المحلية مثل البرقاوي وغيرها.",
  },
  {
    title: "علف دجاج بيّاض",
    icon: icon3,
  details:
      "مخصص لإنتاج بيض بجودة عالية، قشرة قوية، وإنتاج ثابت يحتوي على نسب دقيقة من الكالسيوم والفيتامينات لدعم الصحة والإنتاجية تحت أي ظروف. ",
  },

    {
    title: "علف الأبقار ",
    icon: icon3,
  details:
      "موجه للأبقار الحلوب والتسمين، ويضمن إنتاج حليب وفير بجودة عالية أو معدلات تسمين قوية حسب البرنامج الغذائي تركيبة مدعومة بخبرة دولية في توازن الطاقة والبروتين. ",
  },

   {
    title: "علف الإبل   ",
    icon: icon3,
  details:
      "مصمم خصيصًا لاحتياجات الإبل، ويدعم النمو والطاقة والتحمّل، مع تحسين وظيفة الجهاز الهضمي، مما يمنح أداءً ممتازًا حتى في الظروف الصحراوية.",
  },

   {
    title: "علف الخيول    ",
    icon: icon3,
  details:
      " تركيبة فاخرة تدعم اللياقة، القوة، وصحة الجهاز الهضمي، وتناسب الخيول الرياضية والترفيهية منتج يضمن طاقة ثابتة دون إجهاد ويعزز صحة العضلات والمفاصل. ",
  },
];

export default Services;
