import { Footer } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";
import { FaSquareFacebook,FaSquareGithub,FaSquareInstagram,FaLinkedin,FaDiscord} from "react-icons/fa6";


const footer = () => {
  return (
    <Footer container className="border border-t border-teal-500">
      <div className="w-full max-w-7xl mx-auto ">
        <div className="mt-6">
          <Link
            to="/"
            className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white"
          >
            <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-l text-white">
              Jack
            </span>
            Sparrow
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:mt-4 sm:grid-cols-4 sm:gap-6 mt-9">
          <div>
            <Footer.Title title="Content" />
            <Footer.Link
              href="https://datalemur.com/questions"
              target="_blank"
              rel="noopener noreferrer"
            >
              SQL Prepetaion Quetions
            </Footer.Link>
            <Footer.Link
              href="https://datalemur.com/questions"
              target="_blank"
              rel="noopener noreferrer"
            >
              SQL Prepetaion Quetions
            </Footer.Link>
            <Footer.Link
              href="https://datalemur.com/questions"
              target="_blank"
              rel="noopener noreferrer"
            >
              SQL Prepetaion Quetions
            </Footer.Link>
          </div>

          <div>
            <Footer.Title title="Content" />
            <Footer.Link
              href="https://datalemur.com/questions"
              target="_blank"
              rel="noopener noreferrer"
            >
              SQL Prepetaion Quetions
            </Footer.Link>
            <Footer.Link
              href="https://datalemur.com/questions"
              target="_blank"
              rel="noopener noreferrer"
            >
              SQL Prepetaion Quetions
            </Footer.Link>
            <Footer.Link
              href="https://datalemur.com/questions"
              target="_blank"
              rel="noopener noreferrer"
            >
              SQL Prepetaion Quetions
            </Footer.Link>
          </div>

          <div>
            <Footer.Title title="Content" />
            <Footer.Link
              href="https://datalemur.com/questions"
              target="_blank"
              rel="noopener noreferrer"
            >
              SQL Prepetaion Quetions
            </Footer.Link>
            <Footer.Link
              href="https://datalemur.com/questions"
              target="_blank"
              rel="noopener noreferrer"
            >
              SQL Prepetaion Quetions
            </Footer.Link>
            <Footer.Link
              href="https://datalemur.com/questions"
              target="_blank"
              rel="noopener noreferrer"
            >
              SQL Prepetaion Quetions
            </Footer.Link>
          </div>

          <div>
            <Footer.Title title="Content" />
            <Footer.Link
              href="https://datalemur.com/questions"
              target="_blank"
              rel="noopener noreferrer"
            >
              SQL Prepetaion Quetions
            </Footer.Link>
            <Footer.Link
              href="https://datalemur.com/questions"
              target="_blank"
              rel="noopener noreferrer"
            >
              SQL Prepetaion Quetions
            </Footer.Link>
            <Footer.Link
              href="https://datalemur.com/questions"
              target="_blank"
              rel="noopener noreferrer"
            >
              SQL Prepetaion Quetions
            </Footer.Link>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:justify-between">
        <Footer.Copyright
          href="#"
          by="JackSapparow's blog"
          year={new Date().getFullYear()}
        />
        <div className="flex gap-5">
          <Footer.Icon href="#" icon={FaSquareFacebook } />
          <Footer.Icon href="#" icon={FaSquareInstagram } />
          <Footer.Icon href="#" icon={FaLinkedin } />
          <Footer.Icon href="#" icon={FaSquareGithub} />
          <Footer.Icon href="#" icon={FaDiscord} />
        </div>
        </div>
        
      </div>
    </Footer>
  );
};
export default footer;
