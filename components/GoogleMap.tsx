export default function GoogleMap() {
    return (
        <div style={{ width: '100%', height: '400px' }}>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.071131373678!2d106.67829317605467!3d10.805864089344716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317529002f6ff1cf%3A0x693d118384775017!2sMon%20Beauty%20-%20Nails%20%26%20Ch%C4%83m%20S%C3%B3c%20Da!5e0!3m2!1sen!2s!4v1727946026797!5m2!1sen!2s"
                className="xl:w-[400px] w-[300px] h-[300px]"
                style={{ border: 0 }}
                allowFullScreen // Note: changed to camelCase
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade" // camelCase for referrer policy
            ></iframe>
        </div>
    );
};
