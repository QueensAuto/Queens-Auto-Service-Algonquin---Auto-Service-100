
import { Translations, Review, FaqItem, BonusItem } from './types';

export const translations: Translations = {
    en: {
        bookNowNav: "Book Now",
        heroCTA: "GET MY SAVINGS NOW",
        heroSubtitle: "Book online to get an instant savings code. The more you spend, the more you save.",
        heroOffer: '<i data-lucide="sparkles" class="inline-block w-4 h-4 mr-1"></i> Exclusive Online Offer',
        detailsApply: "*Details Apply",
        ctaUrgency: "Exclusive Online Offer – Valid This Month Only",
        dragSlider: "Move the slider to see how much YOU could save.",
        repairCost: "Repair Cost", youSave: "You Save", finalCost: "Final Cost",
        oilChangeNote: "Oil changes count toward spend but are not discounted.",
        couponTitle: "What Repairs Can You Use This Coupon For?",
        couponSubtitle: "This discount applies to most of the repair work we do here at Queens Auto. That means you can save big on services like:",
        couponList1: `<li class="flex items-start"><i data-lucide="check-circle" class="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0 mt-1"></i>Brake repairs & replacements</li>
                      <li class="flex items-start"><i data-lucide="check-circle" class="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0 mt-1"></i>Suspension & steering work</li>
                      <li class="flex items-start"><i data-lucide="check-circle" class="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0 mt-1"></i>Engine diagnostics & tune-ups</li>
                      <li class="flex items-start"><i data-lucide="check-circle" class="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0 mt-1"></i>Batteries, alternators & starters</li>`,
        couponList2: `<li class="flex items-start"><i data-lucide="check-circle" class="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0 mt-1"></i>Heating & A/C repairs</li>
                      <li class="flex items-start"><i data-lucide="check-circle" class="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0 mt-1"></i>Belts, hoses & spark plugs</li>
                      <li class="flex items-start"><i data-lucide="check-circle" class="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0 mt-1"></i>Electrical diagnostics</li>
                      <li class="flex items-start"><i data-lucide="check-circle" class="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0 mt-1"></i>Fluid flushes & maintenance</li>`,
        couponExclusions: "<strong>Not included:</strong> Tires, oil changes, and state inspections.",
        bonusStackTitle: "Your Repair Comes With These FREE Bonuses",
        bonusStackSubtitle: "We pack in the value so you can drive away with total peace of mind.",
        bonus1Title: "Tiered Savings",
        bonus1Desc: "$50 OFF $500+ | $100 OFF $700+",
        bonus2Title: "Multi-Point Inspection",
        bonus2Desc: "A $79 Value, included for free.",
        bonus3Title: "Brake & Tire Safety Check",
        bonus3Desc: "A $39 Value, on us.",
        bonus4Title: "Roadside Assistance",
        bonus4Desc: "24/7 help, a $59 value.",
        bonus5Title: "Nationwide Warranty",
        bonus5Desc: "A powerful 2-Year / 24,000-Mile warranty.",
        bonusStackDisclaimer: "*Disclaimer: Warranty and roadside assistance are provided through ProVantage Auto Repair Network. See full terms for details.",
        step1Title: "Book", step1Desc: "Book online to get your savings code.",
        step2Title: "Show Up", step2Desc: "Bring your car. We’ll handle the rest.",
        step3Title: "Save", step3Desc: "Show your code to apply your discount.",
        formInstruction1: "Step 1 of 2 — Your contact and vehicle details.",
        formInstruction2: "Step 2 of 2 — When can you bring it in?",
        firstName: "First Name", lastName: "Last Name", email: "Email", mobileNumber: "Mobile Number",
        vehicleDetails: "Vehicle Details", carYear: "Year", carMake: "Make", carModel: "Model",
        nextButton: "Next &rarr; Pick a Time",
        whenBringIn: "When can you bring it in?",
        availableTimes: "Available Times",
        backButton: "&larr; Back",
        submitBtn: "Book My Service",
        testimonialsTitle: "Trusted by Algonquin Drivers",
        testimonialsSubtitle: "Rated 4.9/5 Stars by 25,000+ customers who won’t go anywhere else.",
        loadMore: "Load More Reviews",
        readMore: "Read more",
        readLess: "Read less",
        aboutUs: "About Us",
        aboutTitle: "Driven by Passion for Cars — and Care for People.",
        aboutBody: "We’re not a big chain — we’re your neighborhood shop built on trust and a passion for what we do. Every car is treated like family, and every customer drives away knowing they got real value.",
        aboutTagline: "Real people. Real service. We fix the car — and the stress.",
        address: "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"inline-block lucide lucide-map-pin mr-2 h-4 w-4 text-cyan-400\"><path d=\"M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z\"></path><circle cx=\"12\" cy=\"10\" r=\"3\"></circle></svg>2401 E Algonquin Rd, Algonquin",
        serviceAreaTitle: "Proudly Serving Algonquin & Beyond",
        serviceAreaSubtitle: "Your savings code is valid at our convenient Algonquin location.",
        serviceAreaList: "Including Algonquin, Lake in the Hills, Crystal Lake, Cary, Huntley, and Barrington.",
        privacyPolicy: "Privacy Policy",
        termsOfUse: "Terms of Use",
        faqTitle: "Frequently Asked Questions",
        faqQ1: "How does the “Up to $100 Off” offer work?",
        faqA1: "It's a tiered system based on your spend. The more your repair costs, the more you save, up to a maximum of $100 off on spends of $700 or more.",
        faqQ2: "What if you have a better deal on brakes or wheel alignment?",
        faqA2: "You’ll always get the best deal we have. If a brake or alignment special saves you more than this coupon, we’ll give you that deal instead. Discounts don’t stack, but we make sure you always come out ahead.",
        faqQ3: "Can I combine this with other coupons or financing offers?",
        faqA3: "No, this offer can’t be combined with other promotions, coupons, or special financing. We always apply whichever discount saves you the most.",
        faqQ4: "Does this work for online and in-store appointments?",
        faqA4: "Yes. Claim your savings online here, then bring your vehicle in for service. Just mention your coupon when you check in at Queens Auto Service.",
        modalTitle: "Offer Details",
        modalP1: "Save up to $100. The discount is tiered based on total repair cost.",
        modalP2: "Excludes tires & state inspections. Oil changes count toward spend but are not discounted.",
        modalP3: "Cannot be combined with other offers. Valid only at Queens Auto Service in Algonquin, IL.",
        popupTitleV2: "Wait! Don’t Miss This Auto Repair Package",
        popupSubtitleV2: "Get Your Tiered Discount + $150 in Free Bonuses When You Book Today.",
        popupBonus1: "Tiered Savings up to $100 OFF",
        popupBonus2: "Free Multi-Point Vehicle Inspection ($79 Value)",
        popupBonus3: "Free Brake & Tire Safety Check ($39 Value)",
        popupBonus4: "Roadside Assistance Included ($59 Value)",
        popupBonus5: "2-Year/24k Nationwide Warranty",
        popupCTAV2: "Claim My Repair Package →",
        bookingSuccess: "Booking...",

        // Thank You Page
        thankYouTitle: "Appointment Confirmed, {{name}}!",
        playMessageFor: "Play a message for {{name}}",
        yourCouponCodeIs: "Your coupon code is:",
        copied: "Copied!",
        confirmationText1: "Your spot is saved! We've sent a confirmation to your email and a text reminder to your phone.",
        confirmationText2: "Your {{vehicle}} is all set for its service.",
        playingAudio: "Playing...",
        playAgain: "Play message again",
        serviceTitle: "Service:",
        serviceValue: "Auto Repair Service",
        dateTimeTitle: "Date & Time:",
        locationTitle: "Location:",
        locationValue: "Queens Auto — Algonquin",
        whatHappensNextTitle: "What Happens Next?",
        whatHappensNextStep1: "Check your text/email: We've sent a confirmation with your details.",
        whatHappensNextStep2: "We'll call to confirm: A team member will call you shortly to confirm everything.",
        whatHappensNextStep3: "Come on by: Head to the shop at your scheduled time. We'll be ready for you!",
        needToRescheduleTitle: "Need to Reschedule?",
        needToRescheduleBody: "No problem. Give us a call and we'll find a better time for you.",
        whereToFindUsTitle: "Where to Find Us",
        getDirections: "Get Directions",
        footerCopyright: "© {{year}} Queens Auto Service. All Rights Reserved.",
        phoneNumber: "(847) 844-1700",
        phoneNumberLink: "tel:8478441700",
        fullAddress: "2401 E Algonquin Rd, Algonquin, IL 60102",
        googleMapsLink: "https://www.google.com/maps/dir/?api=1&destination=Queens+Auto+Service+2401+E+Algonquin+Rd,+Algonquin,+IL+60102",
        aboutImageAlt: "The exterior of Queens Auto Service shop in Algonquin.",
        mapImageAlt: "Map of Queens Auto Service service area in the greater Algonquin area",

    },
    es: {
        bookNowNav: "Reservar Ahora",
        heroCTA: "OBTENER MIS AHORROS AHORA",
        heroSubtitle: "Reserva en línea para obtener un código de ahorro al instante. Cuanto más gastas, más ahorras.",
        heroOffer: '<i data-lucide="sparkles" class="inline-block w-4 h-4 mr-1"></i> Oferta Exclusiva en Línea',
        detailsApply: "*Aplican Detalles",
        ctaUrgency: "Oferta Exclusiva en Línea – Válida Solo Este Mes",
        dragSlider: "Mueve el control deslizante para ver cuánto podrías ahorrar.",
        repairCost: "Costo de Reparación", youSave: "Ahorras", finalCost: "Costo Final",
        oilChangeNote: "Los cambios de aceite cuentan para el gasto pero no tienen descuento.",
        couponTitle: "¿En Qué Reparaciones Puedes Usar Este Cupón?",
        couponSubtitle: "Este descuento se aplica a la mayoría de los trabajos de reparación que hacemos en Queens Auto. Eso significa que puedes ahorrar en grande en servicios como:",
        couponList1: `<li class="flex items-start"><i data-lucide="check-circle" class="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0 mt-1"></i>Reparación y reemplazo de frenos</li>
                      <li class="flex items-start"><i data-lucide="check-circle" class="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0 mt-1"></i>Trabajos de suspensión y dirección</li>
                      <li class="flex items-start"><i data-lucide="check-circle" class="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0 mt-1"></i>Diagnóstico de motor y afinaciones</li>
                      <li class="flex items-start"><i data-lucide="check-circle" class="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0 mt-1"></i>Baterías, alternadores y arranques</li>`,
        couponList2: `<li class="flex items-start"><i data-lucide="check-circle" class="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0 mt-1"></i>Reparaciones de calefacción y A/C</li>
                      <li class="flex items-start"><i data-lucide="check-circle" class="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0 mt-1"></i>Correas, mangueras y bujías</li>
                      <li class="flex items-start"><i data-lucide="check-circle" class="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0 mt-1"></i>Diagnóstico eléctrico</li>
                      <li class="flex items-start"><i data-lucide="check-circle" class="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0 mt-1"></i>Lavado de fluidos y mantenimiento</li>`,
        couponExclusions: "<strong>No incluido:</strong> Llantas, cambios de aceite e inspecciones estatales.",
        bonusStackTitle: "Tu Reparación Viene Con Estos Bonos GRATIS",
        bonusStackSubtitle: "Incluimos valor agregado para que puedas conducir con total tranquilidad.",
        bonus1Title: "Ahorros por Nivel",
        bonus1Desc: "$50 de DCTO en $500+ | $100 de DCTO en $700+",
        bonus2Title: "Inspección Multi-Punto",
        bonus2Desc: "Un valor de $79, incluido gratis.",
        bonus3Title: "Revisión de Seguridad de Frenos y Llantas",
        bonus3Desc: "Un valor de $39, por nuestra cuenta.",
        bonus4Title: "Asistencia en Carretera",
        bonus4Desc: "Ayuda 24/7, un valor de $59.",
        bonus5Title: "Garantía Nacional",
        bonus5Desc: "Una potente garantía de 2 años / 24,000 millas.",
        bonusStackDisclaimer: "*Aviso: La garantía y la asistencia en carretera son proporcionadas a través de ProVantage Auto Repair Network. Ver términos completos para más detalles.",
        step1Title: "Reserva", step1Desc: "Reserva en línea para obtener tu código de ahorro.",
        step2Title: "Visítanos", step2Desc: "Trae tu auto. Nosotros nos encargamos del resto.",
        step3Title: "Ahorra", step3Desc: "Muestra tu código para aplicar tu descuento.",
        formInstruction1: "Paso 1 de 2 — Tus datos de contacto y del vehículo.",
        formInstruction2: "Paso 2 de 2 — ¿Cuándo puedes traerlo?",
        firstName: "Nombre", lastName: "Apellido", email: "Correo Electrónico", mobileNumber: "Número de Celular",
        vehicleDetails: "Detalles del Vehículo", carYear: "Año", carMake: "Marca", carModel: "Modelo",
        nextButton: "Siguiente &rarr; Elige una Hora",
        whenBringIn: "¿Cuándo puedes traerlo?",
        availableTimes: "Horas Disponibles",
        backButton: "&larr; Atrás",
        submitBtn: "Reservar Mi Servicio",
        testimonialsTitle: "Con la Confianza de los Conductores de Algonquin",
        testimonialsSubtitle: "Calificado 4.9/5 Estrellas por más de 25,000 clientes que no irán a ningún otro lado.",
        loadMore: "Cargar Más Reseñas",
        readMore: "Leer más",
        readLess: "Leer menos",
        aboutUs: "Sobre Nosotros",
        aboutTitle: "Impulsados por la Pasión por los Autos y el Cuidado por las Personas.",
        aboutBody: "No somos una gran cadena, somos tu taller de barrio construido sobre la confianza y la pasión por lo que hacemos. Cada auto es tratado como de la familia, y cada cliente se va sabiendo que obtuvo un valor real.",
        aboutTagline: "Gente real. Servicio real. Arreglamos el auto y el estrés.",
        address: "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"inline-block lucide lucide-map-pin mr-2 h-4 w-4 text-cyan-400\"><path d=\"M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z\"></path><circle cx=\"12\" cy=\"10\" r=\"3\"></circle></svg>2401 E Algonquin Rd, Algonquin",
        serviceAreaTitle: "Sirviendo con Orgullo a Algonquin y sus Alrededores",
        serviceAreaSubtitle: "Tu código de ahorro es válido en nuestra conveniente ubicación de Algonquin.",
        serviceAreaList: "Incluyendo Algonquin, Lake in the Hills, Crystal Lake, Cary, Huntley y Barrington.",
        privacyPolicy: "Política de Privacidad",
        termsOfUse: "Términos de Uso",
        faqTitle: "Preguntas Frecuentes",
        faqQ1: "¿Cómo funciona la oferta de “Hasta $100 de Descuento”?",
        faqA1: "Es un sistema por niveles basado en tu gasto. Cuanto más cueste tu reparación, más ahorras, hasta un máximo de $100 de descuento en gastos de $700 o más.",
        faqQ2: "¿Qué pasa si tienen una mejor oferta en frenos o alineación de ruedas?",
        faqA2: "Siempre obtendrás la mejor oferta que tengamos. Si una oferta especial de frenos o alineación te ahorra más que este cupón, te daremos esa oferta. Los descuentos no se acumulan, pero nos aseguramos de que siempre salgas ganando.",
        faqQ3: "¿Puedo combinar esto con otros cupones u ofertas de financiamiento?",
        faqA3: "No, esta oferta no se puede combinar con otras promociones, cupones o financiamientos especiales. Siempre aplicamos el descuento que más te ahorre.",
        faqQ4: "¿Funciona para citas en línea y en la tienda?",
        faqA4: "Sí. Reclama tus ahorros en línea aquí y luego trae tu vehículo para el servicio. Solo menciona tu cupón al registrarte en Queens Auto Service.",
        modalTitle: "Detalles de la Oferta",
        modalP1: "Ahorra hasta $100. El descuento es por niveles según el costo total de la reparación.",
        modalP2: "Excluye llantas e inspecciones estatales. Los cambios de aceite cuentan para el gasto pero no tienen descuento.",
        modalP3: "No se puede combinar con otras ofertas. Válido solo en Queens Auto Service en Algonquin, IL.",
        popupTitleV2: "¡Espera! No te pierdas este paquete de reparación",
        popupSubtitleV2: "Obtén tu Descuento por Nivel + $150 en Bonos Gratis al Reservar Hoy.",
        popupBonus1: "Ahorros por Nivel hasta $100 de DCTO",
        popupBonus2: "Inspección Vehicular Gratuita ($79 Valor)",
        popupBonus3: "Revisión de Seguridad de Frenos y Llantas Gratuita ($39 Valor)",
        popupBonus4: "Asistencia en Carretera Incluida ($59 Valor)",
        popupBonus5: "Garantía Nacional de 2 Años/24k Millas",
        popupCTAV2: "Reclamar Mi Paquete →",
        bookingSuccess: "Reservando...",

        // Thank You Page
        thankYouTitle: "¡Cita Confirmada, {{name}}!",
        playMessageFor: "Reproducir un mensaje para {{name}}",
        yourCouponCodeIs: "Tu código de cupón es:",
        copied: "¡Copiado!",
        confirmationText1: "¡Tu lugar está reservado! Hemos enviado una confirmación a tu correo y un recordatorio a tu teléfono.",
        confirmationText2: "Tu {{vehicle}} está listo para su servicio.",
        playingAudio: "Reproduciendo...",
        playAgain: "Reproducir de nuevo",
        serviceTitle: "Servicio:",
        serviceValue: "Servicio de Reparación de Auto",
        dateTimeTitle: "Fecha y Hora:",
        locationTitle: "Ubicación:",
        locationValue: "Queens Auto — Algonquin",
        whatHappensNextTitle: "¿Qué Sigue Ahora?",
        whatHappensNextStep1: "Revisa tu texto/correo: Hemos enviado una confirmación con tus detalles.",
        whatHappensNextStep2: "Llamaremos para confirmar: Un miembro del equipo te llamará pronto para confirmar todo.",
        whatHappensNextStep3: "Visítanos: Dirígete al taller a la hora programada. ¡Estaremos listos para ti!",
        needToRescheduleTitle: "¿Necesitas Reprogramar?",
        needToRescheduleBody: "No hay problema. Llámanos y encontraremos un mejor momento para ti.",
        whereToFindUsTitle: "Dónde Encontrarnos",
        getDirections: "Obtener Direcciones",
        footerCopyright: "© {{year}} Queens Auto Service. Todos los Derechos Reservados.",
        phoneNumber: "(847) 844-1700",
        phoneNumberLink: "tel:8478441700",
        fullAddress: "2401 E Algonquin Rd, Algonquin, IL 60102",
        googleMapsLink: "https://www.google.com/maps/dir/?api=1&destination=Queens+Auto+Service+2401+E+Algonquin+Rd,+Algonquin,+IL+60102",
        aboutImageAlt: "El exterior del taller de Queens Auto Service en Algonquin.",
        mapImageAlt: "Mapa del área de servicio de Queens Auto Service en el área metropolitana de Algonquin",
    }
};

export const testimonials: Review[] = [
    {
        "name": "Luis Subias",
        "text": "Came in to patch up a flat tire with a nail. They took me in as a walk in and fixed it super fast. Exceptional customer service, they took care of everything from fixing it to putting it back on the car. Definitely coming back."
    },
    {
        "name": "Emerick",
        "text": "Great spot great customer service. Fast and reliable service can’t complain definitely will recommend 💯"
    },
    {
        "name": "Jacob P",
        "text": "Had a screw in tire, everybody was great and kind. Was in and out in under 20 minutes without appointment."
    },
    {
        "name": "Itiel Zazueta",
        "text": "I came in because I had gotten a flat tire and needed a new one. The guys from Queens Auto Services were very helpful, quick, reasonable, and friendly."
    },
    {
        "name": "Matthew R.",
        "text": "These guys are the absolute best in town they all have real nice personalities they make you feel comfortable there they are also very quick and efficient I will never go to another mechanic Al at the front will definitely take care of you 💯🚗"
    },
    {
        "name": "Marie Bolet",
        "text": "Excellent service for over 20 years"
    },
    {
        "name": "Al Perez1",
        "text": "Awesome Shop great service coming down recommend everyone to go there great prices"
    },
    {
        "name": "olivia bronowicki",
        "text": "My mazda has been having continuous issues, the dealership quoted me $5400, and Queens has fixed my problem for $400, Al is very honest, and he knows what he is doing. The customer service is great, and so is the pricing. I really recommend this place. This is the place I go to when I have a problem with my mazda."
    },
    {
        "name": "Ramiro Ramirez III",
        "text": "Nice and quick service.   Will come again"
    },
    {
        "name": "Gloria Parra",
        "text": "Very happy with my service. I had previously taken my car for a flat tire to a previous tire shop and was told it was my rim which I found unlikely. When I Brought my car to this shop in less then half hour they had my car ready and it indeed was my tire. Also the pricing was reasonable and Baltazar in the front was very helpful, professional, and nice. I for will for sure be coming back."
    },
    {
        "name": "krz tn",
        "text": "I have been going here for years, and won't go anywhere else unless I have to. They are always able to get you in and they're just good people in general. They recommend what really needs to be done and everything is charged fairly. They've helped me out big time with my older cars that aren't in great condition and keep them running! I really appreciate everyone who works here."
    },
    {
        "name": "Phone Number",
        "text": "I will never buy tires anywhere else. This place pays close attention to everything. I'd they see something they will show you it and work with you to fix it right. You can pick your tires if you go the used route. I got 2 used tires for an SUV with well over 80% life left for 130$ mounted and balanced plus they caught a leaky valve steam and showed me it before they fixed it. No surprises and quality work. Wait area is nice and shop moves quick but highly professional. Thank you guys you got me back in the road and driving safe for the price of 1 tire from any other shop. I will never go anywhere else again. They also have amazing prices on new tires. They give a 30day guaranteed satisfaction warranty on the used ones too!!!  They treat you fair and show you anything they find I couldn't leave a good enough review thank you!!!"
    },
    {
        "name": "MD 83",
        "text": "Very fair prices, the team did a great job fixing my fan belt, and stayed open a few minutes late to let me pick it up the same day. I really appreciated all your efforts, thank you. I will be back if I have another issue."
    },
    {
        "name": "Alejandro Bedolla",
        "text": "Quick fast service good prices 👍"
    },
    {
        "name": "Jonathan Agudo",
        "text": "Guys were very professional helped\nMe with bulb issue highly recommend going to them quick and fast service . They work with you and open weekends thanks guys"
    },
    {
        "name": "MANNY Longa",
        "text": "I'm new to this town so finding a good trust worthy mechanic is hard.  I been here with my pickup truck and they been awesome with me . Fair price good mechanic's and awesome customer service.  Thanks for the service Renger 95.."
    },
    {
        "name": "Alfred Vasquez",
        "text": "Well if you ever need air in your tires I suggest you go somewhere else or put air yourself because I went there and asked the guy if he would put air in my tires  I would give him 2$.   I should him a 5$  he looked at me and said he didn't have change and put the 5$ in his pocket then he put air . I didn't want to look like I was cheap and don't say anything . But I'll never go there for air again. I wonder what their prices are . You can guess that one."
    },
    {
        "name": "Ana Careaga",
        "text": "Awesome!!!! We have been coming here for almost 2 years because my husband loves to have flat tires lol and there affordable and always fast and friendly recommend if you are on a budget and need a fast fix!"
    },
    {
        "name": "Angelica Santoro",
        "text": "Great service quality work! They go above and beyond to fix your car for incredibly fair prices. I won’t take my car anywhere else."
    },
    {
        "name": "Jen Lessner",
        "text": "Finally, an honest affordable mechanic shop!  The owner and his staff treat you like you are family.  They have done an excellent job in getting my truck taken care of.  Definitely a RARE find!"
    },
    {
        "name": "Mike Abene III",
        "text": "Brought my 30ft RV to have 6 tires mounted, also had a frozen caliper replaced. The caliper seized on the way to Queens to get the tires mounted. These guys let me know about it, ordered a part that we had to wait a few hours to be delivered but meantime we were given complimentary waters, kept up to date, (who I assume was the owner) even purchased paletas for my wife 2 kids and me. Great hospitable group of people working there from top to bottom. Young lady at the front desk deserves appreciation as well, great customer service."
    },
    {
        "name": "tomasz helenowski",
        "text": "Hard working. Will do things for your car / truck the dealers and other garages are too lazy or greedy to do (repair rather than replace if possible.) They also better prices than most other garages and definitely the dealers. Keeps me coming back with my truck, trailers, and cars."
    },
    {
        "name": "J K",
        "text": "Owner was very polite and professional and very reasonable on his prices, service was outstanding, I would definitely get more repairs done if needed by the his establishment. Would highly recommend his business"
    },
    {
        "name": "E J",
        "text": "I stopped by today because I had purchased some cheap caps for my air valves somewhere else and I couldn't get them back off to put air in my tires.  I stopped here and the man that helped me was very friendly, got the two caps taken off that I needed and wouldn't charge me for them.  When I need tires I will be back here to buy them!"
    },
    {
        "name": "Don Martin",
        "text": "I had a very good experience at this place last night, at the very last minute before they close.\nIt was a bushing replacement, and the price for the service was affordable to my pocket. If I need a service for my car in the future, I know they earned my business."
    },
    {
        "name": "Mirosław Chmiel",
        "text": "Five stars. Highly recommend!"
    },
    {
        "name": "Elias Rendon",
        "text": "Always available to help on the most needed situations, great service and friendly stuff, 100% satisfaction, highly recommend for all tire needs, car, truck, SUV, equipment tires, semis, etc, etc."
    },
    {
        "name": "Joel Babb",
        "text": "I use them for all my car needs. They are prompt and vary fair when it comes to price. They will not rip you off like most shops. I will not go anywhere else!"
    },
    {
        "name": "Stephanie Krzywonos",
        "text": "Fast, cheap, and friendly. I have been going to these guys for tires for years now and am always highly satisfied."
    },
    {
        "name": "Michael Ratley",
        "text": "Mike from All American seals code wants to say thanks for the fast service getting my guys back on the job excellent job and excellent advice All American Sealcoat of snow plowing definitely recommend Queens Auto Service thank you very much"
    },
    {
        "name": "Danny Thomas",
        "text": "I always take all of my vehicles to queen auto and have been for years. The owner is very friendly and provided quality service and an affordable price!"
    },
    {
        "name": "Jonathan T (JT's Voice)",
        "text": "Very helpful and honest mechanic with fair prices. You can't beat that! Cant recommend enough."
    },
    {
        "name": "juan gutierrez",
        "text": "I've been coming to him for years when he was working out of his house always great honest service and very reasonable"
    },
    {
        "name": "Ronda Owen",
        "text": "They took care of my truck tire which I had issues with and handled it with professionalism and fast service"
    },
    {
        "name": "Michael Blaney",
        "text": "Best place around and reliable has the best service been going here for 10 years highly recommended 👌 👍"
    },
    {
        "name": "Azazel Reyes",
        "text": "very good service excellent prices .. very friendly guys always attentive to find a solution."
    },
    {
        "name": "Daniel Schmidt",
        "text": "Fast friendly help when I needed it really bad, pulled in with a totally ruined tire, they put a new one on in just a few minutes"
    },
    {
        "name": "Joanna Alavez",
        "text": "Very helpful, friendly, and efficient staff. Fair prices and in general very great service."
    },
    {
        "name": "michael robertson",
        "text": "Excellent prices and great service what more can you ask for.. Thanks for everything.. 👍👍"
    },
    {
        "name": "Sendy Ruiz",
        "text": "Great prices and great ppl. Needed 4 tires. Went in was done in less than hr!"
    },
    {
        "name": "Alejandra Ponce",
        "text": "Excellent work they are honest fast ange very respectful I highly recommend this place"
    },
    {
        "name": "Dave Foust",
        "text": "Great prices great staff professional work they have my business as long as I live here"
    },
    {
        "name": "Lynette Flores",
        "text": "Best place for new and used tires. Honest, fast and good priced."
    },
    {
        "name": "Zach Konecnik",
        "text": "Great service, great prices, and great people. Will definitely go back in the future"
    },
    {
        "name": "Jennifer Rivera",
        "text": "My brother goes here for  tires. He says they have best prices around."
    },
    {
        "name": "Daniel Ayotte",
        "text": "Good prices and quick service my go to tire shop."
    },
    {
        "name": "Syed Ahmed",
        "text": "Quick service,  got 2 used tires for my 2002 Honda accord."
    },
    {
        "name": "Jorge Guadarrama",
        "text": "Owner very good people, great service not expensive."
    },
    {
        "name": "Carmen Sanchez",
        "text": "Very efficient friendly affordable and fast highly recommend"
    },
    {
        "name": "Antonio Ramirez",
        "text": "Got my tires put on great service..recommended"
    },
    {
        "name": "Karl Jekosz",
        "text": "Honest place. They are fair and don't try to sell you anything you don't need done to your vehicle."
    },
    {
        "name": "Ibragim Asanov",
        "text": "Good price, good service,good quality tires!!! Thank you!!!"
    },
    {
        "name": "AJ N",
        "text": "They are fast, affordable and friendly!"
    },
    {
        "name": "Leslie Brennan",
        "text": "Quality work and excellent customer service!"
    },
    {
        "name": "Joey Lazi",
        "text": "The best service from AL"
    },
    {
        "name": "Diane Valdez",
        "text": "And they want to work"
    },
    {
        "name": "Edwin Eisenstaedt",
        "text": "Good prices and service."
    },
    {
        "name": "Samuel Castaneda",
        "text": "The best. And fast service"
    },
    {
        "name": "Arturo Mancera",
        "text": "Excellent service. In quality work"
    },
    {
        "name": "Gabriel Servin",
        "text": "They do a great job"
    },
    {
        "name": "Isabel Gutierrez",
        "text": "Great service friendly faces"
    },
    {
        "name": "The Burned man",
        "text": "One of the best shops in the area"
    },
    {
        "name": "Rodolfo Diosdado",
        "text": "Left my car very good"
    },
    {
        "name": "Brienna Silver",
        "text": "Always friendly and quick."
    },
    {
        "name": "Ken Erickson",
        "text": "Fast, efficient, and affordable!"
    },
    {
        "name": "Joel Gutierrez",
        "text": "Muy buena Atención por parte del personal. Mi camioneta se poncho una llanta y ellos la parcharon y fué a un precio muy accesible y justo."
    },
    {
        "name": "Leonor Coria",
        "text": "Esta lugar es muy bien porq atienden a las peersonas son muy amables …y cuando hablo por tel me dan un precio y así me dan lo je me dicen …y les recomiendo este lugar 100 💯 por ciento …me gusta los precios que dan ..y me quedado bn satisfecho con todo eso servicio 😘"
    },
    {
        "name": "Moises Gonzalez",
        "text": "Quiere comprar llantas este  es el lugar perfecto compré las 4 llantas a muy buen precio recomiendo estos lugares Queen  auto servicio."
    },
    {
        "name": "AT&T AT&T",
        "text": "Great location,excellent service,and PRICE!!!!!рекомендую огромный выбор шин,делают неплохие скидки\nЗаезжайте,не пожалеете!!"
    },
    {
        "name": "sandra lopez",
        "text": "Me gusta llevar mi carro a qui por que siempre me lo dejan muy bien lo recomiendo"
    },
    {
        "name": "Jorge franzua",
        "text": "Buen servicio y rápido"
    },
    {
        "name": "David Rodriguez",
        "text": "Buena comunicación  y servicio  de trabajo"
    },
    {
        "name": "Rosa sanchez",
        "text": "Exelente atención 👍 👏 servicio 👍 conpleto"
    },
    {
        "name": "Cecilia Aldama",
        "text": "Exelente trabajo muy buen servicio"
    },
    {
        "name": "Esteban Gutierrez",
        "text": "Trabajos de muy buena calidad"
    },
    {
        "name": "edgar vivas",
        "text": "Muy rápido el servicio"
    },
    {
        "name": "Orlando Luna",
        "text": "I had a very disappointing experience with Baltazar at Queens Auto Service. He treated me with a complete lack of respect and was extremely unprofessional throughout the process. When I came in regarding the warranty on my tires, they refused to honor it and didn’t even take the time to check the actual mileage on my truck, which is the most basic step to determine if the warranty is still valid.\n\nIt felt like they just wanted to avoid taking responsibility, and I left feeling frustrated and disrespected. I do not recommend this shop based on how poorly I was treated and how unwilling they were to stand behind their service and products."
    },
    {
        "name": "Jess Rivera",
        "text": "Good and efficient services, they're where able to get me and out. For a walk in oil change and tire roation."
    },
    {
        "name": "Lino Barraza",
        "text": "Decent pricing and good customer service.  Went to get a broken rim changed out for a new one I had and it the pricing was extremely low.  Only negative aspect of this place is the small parking lot, although I did have a big truck and trailer.  So can't really give them bad marks for it."
    },
    {
        "name": "Jonathan Reda",
        "text": "Great staff, they've always help me out when I needed it"
    },
    {
        "name": "Antonio Davila",
        "text": "Very good service. .."
    },
    {
        "name": "Destiny Moon",
        "text": "They are really quick"
    }
];

export const faqData: FaqItem[] = [
    { qKey: 'faqQ1', aKey: 'faqA1' },
    { qKey: 'faqQ2', aKey: 'faqA2' },
    { qKey: 'faqQ3', aKey: 'faqA3' },
    { qKey: 'faqQ4', aKey: 'faqA4' },
];

export const bonusData: BonusItem[] = [
    { icon: 'tag', titleKey: 'bonus1Title', descKey: 'bonus1Desc' },
    { icon: 'search-check', titleKey: 'bonus2Title', descKey: 'bonus2Desc' },
    { icon: 'shield-check', titleKey: 'bonus3Title', descKey: 'bonus3Desc' },
    { icon: 'truck', titleKey: 'bonus4Title', descKey: 'bonus4Desc' },
    { icon: 'award', titleKey: 'bonus5Title', descKey: 'bonus5Desc' },
];
