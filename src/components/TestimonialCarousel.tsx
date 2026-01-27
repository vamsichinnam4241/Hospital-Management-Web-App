'use client';

import { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Ibbu Md",
    type: "Patient",
    content: "My father had lungs infection he treated very well. And Dr.Suresh Garu hae very good experience in lungs and heart treatment. After lungs infection got reduced Suresh Sir did open heart surgery. That was successful and my father's health condition is very good now. The way of talking and handling patient is so good by Dr. Suresh garu. 100% true Dr. For speedy recovery and good treatment.",
    rating: 5
  },
  {
    name: "JS MEDIAWORLD",
    type: "Patient",
    content: "Most trustworthy and proficient doctors in both the Telugu States. Standing ovation to Dr. Bhanu madam and Dr. Suresh sir. Stay happy together forever. Thak you.",
    rating: 5
  },
  {
    name: "Taj Uddeen",
    type: "Patient",
    content: "Suresh sir is the best doctor for cardiac surgery,a very down to earth person.,sir done CABG to my daddy actually it's very complicated but sir successfully done well ., these words are not enough...,very very thank you soooo much sir ....",
    rating: 5
  },
  {
    name: "Valli UdayaSri Arvapalli",
    type: "Patient",
    content: "Great surgeon and friendly doctor",
    rating: 5
  }
];

export default function TestimonialCarousel() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((current + 1) % testimonials.length);
  const prev = () => setCurrent((current - 1 + testimonials.length) % testimonials.length);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [current]);

  return (
    <div className="relative max-w-4xl mx-auto px-4 py-12">
      <div className="bg-white rounded-3xl shadow-xl p-8 md:p-16 relative overflow-hidden">
        <Quote className="absolute top-8 right-8 h-24 w-24 text-blue-50 opacity-50" />
        
        <div className="relative z-10 flex flex-col items-center text-center">
          <div className="flex gap-1 mb-6">
            {[...Array(testimonials[current].rating)].map((_, i) => (
              <Star key={i} className="h-6 w-6 text-yellow-500 fill-yellow-500" />
            ))}
          </div>
          
          <p className="text-xl md:text-2xl text-gray-700 italic mb-8 leading-relaxed">
            "{testimonials[current].content}"
          </p>
          
          <div className="flex flex-col items-center">
             <div className="h-14 w-14 bg-blue-100 rounded-full flex items-center justify-center font-bold text-blue-600 mb-4">
                {testimonials[current].name[0]}
             </div>
             <h4 className="font-bold text-gray-900 text-lg">{testimonials[current].name}</h4>
             <p className="text-blue-600 font-medium">{testimonials[current].type}</p>
          </div>
        </div>

        <div className="absolute inset-y-0 left-4 flex items-center">
          <button onClick={prev} className="h-12 w-12 rounded-full bg-white shadow-md border border-gray-100 flex items-center justify-center text-gray-400 hover:text-blue-600 transition-all">
            <ChevronLeft className="h-6 w-6" />
          </button>
        </div>
        <div className="absolute inset-y-0 right-4 flex items-center">
          <button onClick={next} className="h-12 w-12 rounded-full bg-white shadow-md border border-gray-100 flex items-center justify-center text-gray-400 hover:text-blue-600 transition-all">
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      </div>
      
      <div className="flex justify-center gap-2 mt-8">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-2 rounded-full transition-all ${current === i ? 'w-8 bg-blue-600' : 'w-2 bg-gray-300'}`}
          />
        ))}
      </div>
    </div>
  );
}
