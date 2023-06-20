import { useState } from "react";

interface Text {
    title: string;
    description: string;
}

// Modal Material UI 
export const useModal = () => {

    const [isModalOpenImage, setIsModalOpenImage] = useState<boolean>(false);
    const [isModalOpenText, setIsModalOpenText] = useState<boolean>(false);
    const [selectedImageUrl, setSelectedImageUrl] = useState<string>('');
    const [selectedText, setSelectedText] = useState<Text>({
        title: '',
        description: ''
    });

    const handleOpenImage = (imageUrl: string) => {
        setSelectedImageUrl(imageUrl);
        setIsModalOpenImage(true);
    };

    const handleOpenText = (title: string, description: string) => {
        setSelectedText({ title: title, description: description })
        setIsModalOpenText(true);
    }

    const handleCloseImage = () => setIsModalOpenImage(false);

    const handleCloseText = () => setIsModalOpenText(false);

    return {
        isModalOpenImage,
        isModalOpenText,
        selectedImageUrl,
        selectedText,
        handleOpenImage,
        handleCloseImage,
        handleOpenText,
        handleCloseText
    }
  
}