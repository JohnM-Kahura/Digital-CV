import axios from 'axios';
import {React,useState} from 'react'
import { axiosInstance } from '../axios';
import {Link} from 'react-router-dom'

function Test() {
  const initialFormData=Object.freeze({
    "full_name":'',
    "email":'',
    "phone":'',
    "intro":'',
    "education":'',
    "experience":'',
  });
  const [formData, setformData] = useState(initialFormData);
  const handleChange=(e)=>{
    setformData({
      ...formData,
      [e.target.name]:e.target.value.trim()
    });
  }
  const  handleSubmit = (e)=>{
      e.preventDefault();
      console.log(formData)
      var obj={
        "full_name": formData.full_name,
        "email": formData.email,
        "phone": formData.phone,
        "intro": formData.intro,
        "education": formData.education,
        "experience": formData.experience,
        "skills": formData.skills
    }
    
      axios.post(
        'http://127.0.0.1:8000/api/',obj).then(
          (res)=>{
          // history.push('/login'),
          // console.log(res);
          // console.log(res.data);
          }
        ).catch((e)=>console.log(e))

     
  }
  return (
 
    <div class="flex items-center justify-center p-12 ">
      
      <div class="mx-auto w-full max-w-[550px] h-8">
        <form  >
          <div class="mb-5">
            <label
              for="full_name"
              class="mb-3 block text-base font-medium text-[#07074D]"
            >
              Full Name
            </label>
            <input
            onChange={handleChange}
              type="text"
              name="full_name"
              id="full_name"
              placeholder="Full Name"
              class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
          <div class="mb-5">
            <label
              for="email"
              class="mb-3 block text-base font-medium text-[#07074D]"
            >
              Email Address
            </label>
            <input
            onChange={handleChange}
              type="email"
              name="email"
              id="email"
              placeholder="example@domain.com"
              class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
          <div class="mb-5">
            <label
              
              class="mb-3 block text-base font-medium text-[#07074D]"
            >
              Phone
            </label>
            <input
            onChange={handleChange}
              type="text"
              name="phone"
             
              placeholder="Enter your subject"
              class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
          <div class="mb-5">
            <label
              for="intro"
              class="mb-3 block text-base font-medium text-[#07074D]"
            >
              Few words about yourself
            </label>
            <textarea
            onChange={handleChange}
              rows="4"
              name="intro"
              placeholder="Type your message"
              class="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            ></textarea>
          </div>
          <div class="mb-5">
            <label
              for="education"
              class="mb-3 block text-base font-medium text-[#07074D]"
            >
              Education
            </label>
            <textarea
            onChange={handleChange}
              rows="4"
              name="education"
              placeholder="Type your message"
              class="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            ></textarea>
          </div>
          <div class="mb-5">
            <label
              for="experience"
              class="mb-3 block text-base font-medium text-[#07074D]"
            >
              Experience
            </label>
            <textarea
            onChange={handleChange}
              rows="4"
              name="experience"
              placeholder="Type your message"
              class="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            ></textarea>
          </div>
          <div class="mb-5">
            <label
              for="skills"
              class="mb-3 block text-base font-medium text-[#07074D]"
            >
              Skills
            </label>
            <textarea
            onChange={handleChange}
              rows="4"
              name="skills"
              placeholder="Type your message"
              class="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            ></textarea>
          </div>
          <div>
            <button
            onClick={handleSubmit}
              class="hover:shadow-form rounded-md bg-black py-3 px-8 text-base font-semibold text-white outline-none"
            >
              <Link to="/cv">Submit</Link>
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Test