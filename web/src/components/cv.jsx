import axios from 'axios';
import React from 'react'
import {  useState, useEffect } from 'react';
import Header from './header'

function CV() {

  const [first_name,setFirstName]=useState('Waiting for the server response.....')
  const [email,setEmail]=useState('Waiting for the server response.....')
  const [phone,setPhone]=useState('Waiting for the server response.....')
  const [intro,setIntro]=useState('Waiting for the server response.....')
  const [education,setEducation]=useState('Waiting for the server response.....')
  const [experience,setExperience]=useState('Waiting for the server response.....')
  const [skills,setSkills]=useState('Waiting for the server response.....')
  const fetchData=async()=>{
    // const result= await axios.get('http://127.0.0.1:8000/api/1/').then((res)=>res.data)
    // console.log(result)
    // console.log('dump thongs')
    try{
      const res = await axios.get('http://127.0.0.1:8000/api/1/',{
        headers: {
           'accept': 'application/json',
        }
    })
    setFirstName(res.data.full_name)
    setEmail(res.data.email)
    setPhone(res.data.phone)
    setIntro(res.data.intro)
    setEducation(res.data.education)
    setExperience(res.data.experience)
    setSkills(res.data.skills)
  } catch (error) {
      console.log(error)
  }
  }
  useEffect(()=>{
    fetchData()
  },[])

  return <>
      {/* <Header/> */}
    <section class="text-gray-600 body-font">
    <div class="container px-5 py-24 mx-auto">
      <div class="flex flex-col text-center w-full mb-20">
        <h2 class="text-xs text-red-500 tracking-widest font-medium title-font mb-1">DIGITAL CV GENERATOR</h2>
        <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">{first_name}</h1>
        <p class="lg:w-2/3 mx-auto leading-relaxed text-base">{intro}</p>
      </div>
      <div class="flex flex-wrap">
        <div class="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
          <h2 class="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">EDUCATION</h2>
          <p class="leading-relaxed text-base mb-4">{education}</p>
          {/* <a class="text-red-500 inline-flex items-center">Learn More
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a> */}
        </div>
        <div class="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
          <h2 class="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">EXPERIENCE</h2>
          <p class="leading-relaxed text-base mb-4">{experience}</p>
          {/* <a class="text-red-500 inline-flex items-center">Learn More
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a> */}
        </div>
        <div class="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
          <h2 class="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">SKILLS</h2>
          <p class="leading-relaxed text-base mb-4">{skills}</p>
          {/* <a class="text-red-500 inline-flex items-center">Learn More
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a> */}
        </div>
        <div class="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
          <h2 class="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">Contact</h2>
          <ul>
            <li><p class="leading-relaxed text-base mb-4">{email}</p></li>
            <li><p class="leading-relaxed text-base mb-4">{phone}</p></li>
          </ul>
          
          
          {/* <a class="text-red-500 inline-flex items-center">Learn More
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a> */}
        </div>
      </div>
      <button class="flex mx-auto mt-16 text-white bg-red-500 border-0 py-2 px-8 focus:outline-none hover:bg-red-600 rounded text-lg" >Copy Link</button>
    </div>
  </section>
  </>
}

export default CV