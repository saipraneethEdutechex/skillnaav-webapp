import React from 'react';
import { BrowserRouter as Router, Routes, Route,   } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';
import CreateAccount from './components/CreateAccount';
import LoginPage from './components/CreateAccountWithValidation';
import NextScreen from './components/NextScreen';
import VerificationCode from './components/VerificationCode';
import Profilebuilding from './components/Profile-Building/ProfileForm';
import ProfilePicture from './components/Profile-Building/ProfilePicture';
import MainPage from './components/Home-Page/MainPage';

const handleFormSubmit = () => {
  console.log('Form submitted');
  // Additional form submission logic here if needed
};
const App = () => {
  
  return (
    <GoogleOAuthProvider clientId="310673671122-ir7djr0ofajd4spsue9cuu47tdtvkatl.apps.googleusercontent.com">
      <Router>
        <Routes>
          <Route path="/" element={<CreateAccount />} />
          <Route path="/create-account" element={<CreateAccount />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/verification" element={<VerificationCode />} />
          <Route path="/next-screen" element={<NextScreen />} />
          <Route path="/profilebuilding" element={<Profilebuilding />} />
          <Route path="/profilepicture" element={<ProfilePicture onSubmit={handleFormSubmit} />} />
          <Route path="/MainPage" element={<MainPage />} />
        </Routes>
      </Router>
    </GoogleOAuthProvider>
  );
};

export default App;
