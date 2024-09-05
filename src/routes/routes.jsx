import React, { Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../layout/Main';
import Loader from '../component/Loader';


const Home = React.lazy(() => import('../pages/home/Home'));
const About = React.lazy(() => import('../pages/about/About'));
const Course = React.lazy(() => import('../pages/course/Course'));
const CourseDetails = React.lazy(() => import('../pages/course/CourseDetails'));
const WhyChooseUsPage = React.lazy(() => import('../pages/about/WhyChooseUs'));
const ContactPage = React.lazy(() => import('../pages/contact/Contact'));
const AdmissionsPage = React.lazy(() => import('../pages/admission/Admission'));
const ErrorPage = React.lazy(() => import('../pages/errorPage/ErrorPage'));
const UpdatedSlider = React.lazy(() => import('../component/upatedslider/Slider'));
const Notice = React.lazy(() => import('../pages/notice/Notice'));
const SearchResult = React.lazy(() => import('../pages/result/ResultSearch'));
const AboutTeam = React.lazy(() => import('../pages/about/AboutTeam'));

export const router = createBrowserRouter([
  {
    path: '',
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '',
        element: (
          <Suspense fallback={<Loader />}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: '/about',
        element: (
          <Suspense fallback={<Loader />}>
            <About />
          </Suspense>
        ),
      },
      {
        path: '/about/why-choose-us',
        element: (
          <Suspense fallback={<Loader />}>
            <WhyChooseUsPage />
          </Suspense>
        ),
      },
      {
        path: '/courses',
        element: (
          <Suspense fallback={<Loader />}>
            <Course />
          </Suspense>
        ),
      },
      {
        path: '/admission',
        element: (
          <Suspense fallback={<Loader />}>
            <AdmissionsPage />
          </Suspense>
        ),
      },
      {
        path: '/courses/:id',
        element: (
          <Suspense fallback={<Loader />}>
            <CourseDetails />
          </Suspense>
        ),
      },
      {
        path: '/result',
        element: (
          <Suspense fallback={<Loader />}>
            <SearchResult />
          </Suspense>
        ),
      },
      {
        path: '/contact-us',
        element: (
          <Suspense fallback={<Loader />}>
            <ContactPage />
          </Suspense>
        ),
      },
      {
        path: '/slider',
        element: (
          <Suspense fallback={<Loader />}>
            <UpdatedSlider />
          </Suspense>
        ),
      },
      {
        path: '/notice',
        element: (
          <Suspense fallback={<Loader />}>
            <Notice />
          </Suspense>
        ),
      },
      {
        path: '/about/team',
        element: (
          <Suspense fallback={<Loader />}>
            <AboutTeam />
          </Suspense>
        ),
      },
    ],
  },
]);
