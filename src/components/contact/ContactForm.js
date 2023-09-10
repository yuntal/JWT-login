import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";



const schema = yup.object().shape({
    name: yup.string().required("Please enter your name"),
    email: yup.string().required("Please enter an email address").email("Please enter a valid email address"),
    message: yup.string().required("Please enter your message").min(10, "The message must be at least 10 characters"),
});

function ContactForm() {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });

    function onSubmit(data) {
        console.log(data);
    }

    console.log(errors);


    return (
        <form onSubmit={handleSubmit(onSubmit)} className="contact">
            <input name="name" placeholder="Name" ref={register} type="name" className="name" {...register("name")} minLength={3}/>
            {errors.name && <span>{errors.name.message}</span>}
            <input name="lastname" placeholder="Last name" ref={register} className="last-name" type="lastname" {...register("lastname")} minLength={4} />
            {errors.lastname && <span>{errors.lastname.message}</span>}
            <div>
			</div> 
            <input name="email" placeholder="Email" ref={register} type="Email" className="email" {...register("email")} />
            {errors.email && <span>{errors.email.message}</span>}
            <input name="subject" placeholder="Subject" className="subject" ref={register} type="Subject" />
            {errors.subject && <span>{errors.subject.message}</span>}
            
            <textarea {...register("message")} minLength={10} name="Message" className="text-area" placeholder="Message" type="Message" />
            {errors.message && <span>{errors.message.message}</span>}

            <button className="send">Send</button>
        </form>
    );
}

export default ContactForm;