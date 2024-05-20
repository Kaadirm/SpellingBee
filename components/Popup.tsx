import { useEffect } from 'react';

interface PopupProps {
    duration: number;
    content: string;
}

const Popup: React.FC<PopupProps> = ({ duration, content }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            const popup = document.querySelector('.animate-slide-down');
            if (popup) {
                popup.classList.remove('animate-slide-down');
                popup.classList.add('animate-slide-up');
                setTimeout(() => {
                    popup.classList.add('hidden');
                }, 500);
            }
        }, duration);

        return () => clearTimeout(timer);
    }, [duration]);

    return (
        <div className="popup animate-slide-down absolute top-0 ">
            <div className="popup-content">{content}</div>
        </div>
    );
};

export default Popup;
