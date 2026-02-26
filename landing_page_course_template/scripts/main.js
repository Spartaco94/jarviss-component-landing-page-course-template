import { loadHeroSection } from './components/hero.js';
import { loadCourseModules } from './components/course-modules.js';
import { loadInstructor } from './components/instructor.js';
import { loadTestimonials } from './components/testimonials.js';
import { loadRegistrationForm } from './components/registration-form.js';
import { loadFAQ } from './components/faq.js';

class LandingPageApp {
    constructor() {
        this.initComponents();
    }

    async initComponents() {
        await Promise.all([
            loadHeroSection(),
            loadCourseModules(),
            loadInstructor(),
            loadTestimonials(),
            loadRegistrationForm(),
            loadFAQ()
        ]);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new LandingPageApp();
});