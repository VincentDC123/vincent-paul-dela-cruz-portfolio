import React from 'react'

const Education = () => {
  return (
    <div className="h-screen w-full bg-gray-300 fixed">
      <div className="h-full w-full overflow-y-scroll no-scrollbar">
        <div className="px-5 py-5 flex items-center justify-center">
          <div className="text-4xl font-semibold overflow-y-hidden">
            Education
          </div>
        </div>

        {/* CSULB and LAHC */}
        <div className="px-20 py-5">
          <div className="border-double border-4 border-zinc-950">
            <div className="py-4">
              {/* Name and Year */}
              <div className="px-5 flex items-start- justify-between">
                <p className="text-lg font-medium">
                  California State University Long Beach
                </p>
                <p className="text-sm font-medium">
                  August 2018 - December 2021
                </p>
              </div>
              {/* Degree and Location */}
              <div className="px-5 flex items-start- justify-between">
                <p className="text-sm italic">
                  Bachelor of Science, Computer Science
                </p>
                <p className="text-sm italic">
                  Long Beach, CA
                </p>
              </div>

              <div className="px-5">
                <div className="text-sm font-light">
                  Courses :
                </div>
                <li className="text-xs">
                  Artificial Intelligence
                </li>
                <li className="text-xs">
                  Computer Network Interoperability
                </li>
                <li className="text-xs">
                  Data Structures and Algorithms
                </li>
                <li className="text-xs">
                  Database Fundamentals
                </li>
                <li className="text-xs">
                  Introduction to Computer Security Principles
                </li>
                <li className="text-xs">
                  Introduction to Networks and Distributed Computing
                </li>
                <li className="text-xs">
                  Mobile Application Development
                </li>
                <li className="text-xs">
                  Objected Oriented Programming and Data Structures
                </li>
                <li className="text-xs">
                  Principles of Programming Languages
                </li>
              </div>
            </div>
            
          </div> 

          <div className="py-0.5"></div>

          <div className="border-double border-4 border-zinc-950">
            <div className="py-4">
              {/* Name and Year */}
              <div className="px-5 flex items-start- justify-between">
                <p className="text-lg font-medium">
                  Los Angeles Harbor College
                </p>
                <p className="text-sm font-medium">
                  June 2016 - July 2018
                </p>
              </div>
              {/* Degree and Location */}
              <div className="px-5 flex items-start- justify-between">
                <p className="text-sm italic">
                  Associate of Arts, Computer Science
                </p>
                <p className="text-sm italic">
                  Wilmington, CA
                </p>
              </div>

              <div className="px-5">
                <div className="text-sm font-light">
                  Courses :
                </div>
                <li className="text-xs">
                  Intro Programming and Problem Solving
                </li>
                <li className="text-xs">
                  Object Oriented Programming and Data Structures
                </li>
              </div>    
            </div>
            
          </div> 

          <div className="py-5">
            <div className="flex items-center justify-center">
              <div className="font-semibold text-base">
                Study Abroad Program
              </div>
            </div>
            
          </div>

          <div className="border-double border-4 border-zinc-950">
            <div className="py-4">
              <div className="px-5 flex items-start- justify-between">
                <p className="text-lg font-medium">
                  Yonsei University
                </p>
                <p className="text-sm font-medium">
                  August 2019 - December 2019
                </p>
              </div>

              <div className="px-5 flex items-start- justify-between">
                <p className="text-sm italic">
                  Computer Science
                </p>
                <p className="text-sm italic">
                  Seoul, South Korea
                </p>
              </div>  
            </div>
          </div> 
          
          {/* To add space for the bottom */}
          <div className="py-10"></div>
        </div>
      </div>
    </div>
  )
}

export default Education