module.exports={
    async send(ctx){
        try{
            const{name}=ctx.request.body.data
            // const nameRegex = /^[A-Za-z0-9\s]+$/;

            if (!name) {
                console.log(name)
                ctx.status = 400;
                ctx.body = { error: "Name field is required" };
                return;
            }
            // @ts-ignore
            const newName = await strapi.services.jobform.send({name})
            console.log(strapi.services)
            ctx.status = 201; 
            ctx.body = newName;
            
        }
        catch(error){
            ctx.throw(500,'An error occurred while processing your request.',error)
        }
    }
}
