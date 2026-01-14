import AdmissionForm from "../Components/AdmissionForm";
import AboutUsPage from "../Pages/AboutUsPage";
import BlogDetailPage from "../Pages/BlogDetailPage";
import Blog from "../Pages/BlogsPage";
import ContactUsPage from "../Pages/ContactUs";
import CourseDetailPage from "../Pages/CourseDetail";

import HomePage from "../Pages/HomePage";
import Page from "../Pages/Page";


const publicroutes = [
    {path:"/" , component:<HomePage />},
    {path:"/aboutus" , component:<AboutUsPage />},
    {path:"/admission", component:<AdmissionForm />},
    {path:"/coursedetail", component:<CourseDetailPage />},
    {path:"/contact-us", component:<ContactUsPage />},
    {path:"/blogs", component:<Blog />},
    {path:"/blogdetail", component:<BlogDetailPage />}
]


export {publicroutes}