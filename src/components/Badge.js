import React from "react";

const getColor = (status) => {
    switch(status) {
        case 'new':
            return { circle: '#d87620', badge: '#834d22', text: 'New ✨' };
        case 'picked':
            return { circle: '#2e7cd1', badge: '#29456c', text: 'Picked Up 🛠️' };
        default:
            return { circle: '#939393', badge: '#5a5a5a', text: 'Archived 🗄️' };
    }
}

const Badge = ({ status }) => {
    const colors = getColor(status);
    console.log(status)
    return (
        <div className="inline-flex items-center text-sm font-semibold leading-tight px-2" style={{ backgroundColor: colors.badge, color: '#fff', borderRadius: '9999px' }}>
            <div className="w-2.5 h-2.5 rounded-full mr-1" style={{ backgroundColor: colors.circle }}></div>
            <p className="relative">{colors.text}</p>
        </div>
    );
};

export default Badge;
