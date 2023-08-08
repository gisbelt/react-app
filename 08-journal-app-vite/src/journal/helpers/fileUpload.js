export const fileUplaod = async ( file ) => {
	if (!file) throw new Error('There is no file to upload')
	
	const cloudURL = "https://api.cloudinary.com/v1_1/dt6djc1ye/upload";
	
	const formData = new FormData()
	formData.append('upload_preset','gldev-react-course')
	formData.append('file', file)

	try {
		const resp = await fetch( cloudURL, {
			method: 'POST',
			body: formData
		})

		if( !resp.ok ) throw new Error("Couldn't upload image")
		const cloudResp = await resp.json();

		return cloudResp.secure_url;
	} catch( error ) {
		console.log(error)
		throw new Error( error.message )
	}
}