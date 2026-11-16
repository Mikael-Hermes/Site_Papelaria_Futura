
function MapWidget({className} : {className: string}){
    return(
        <div className={className}>
            <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d351.2643079129378!2d-43.968515309043305!3d-19.9221783650299!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa69716614499ef%3A0x9d7570651abb1121!2sPAPELARIA%20FUTURA!5e0!3m2!1spt-BR!2sbr!4v1794838433060!5m2!1spt-BR!2sbr" 
            width="600" 
            height="450" 
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy" 
            referrerPolicy="strict-origin-when-cross-origin">
            </iframe>
            
        </div>
    )
}

export default MapWidget