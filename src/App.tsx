import { Routes, Route } from 'react-router-dom';
import {
    Home,
    Explore,
    Saved,
    CreatePost,
    Profile,
    EditPost,
    PostDetails,
    UpdateProfile,
    AllUsers,
} from "@/_root/pages";
import SignupForm from "./_auth/forms/SignupForm";
import SigninForm from "./_auth/forms/SigninForm";
import './globals.css';
import AuthLayout from './_auth/AuthLayout';
import RootLayout from './_root/RootLayout';
import { Toaster } from './components/ui/toaster';

const App = () => {
    return (
        <main className='flex h-screen'>
            <Routes>
                {/* public routes */}
                <Route element={<AuthLayout />} >
                    <Route path='/sign-in' element={<SigninForm />} />
                    <Route path='/sign-up' element={<SignupForm />} />
                </Route>


                {/* Private Routes */}
                <Route element={<RootLayout />}>
                    <Route index element={<Home />} />
                    <Route path='/explore' element={< Explore />} />
                    {/* <Route path='/people' element={< People />} /> */}
                    <Route path='/saved' element={< Saved />} />
                    <Route path='/create-post' element={< CreatePost />} />
                    <Route path="/all-users" element={<AllUsers />} />
                    <Route path='/update-post/:id' element={<EditPost />} />
                    <Route path="/posts/:id" element={<PostDetails />} />
                    <Route path='/profile/:id/*' element={<Profile />} />
                    <Route path='/update-profile/:id/*' element={<UpdateProfile />} />

                </Route>
            </Routes>

            <Toaster />
        </main>
    )
}

export default App
