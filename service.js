// service.js
function getRecommendations(category, userChoices) {
    const data = getAllContent().filter(item => item.category === category);
    
    // Tính điểm
    const results = data.map(item => {
        let score = 0;
        const totalCriteria = Object.keys(userChoices).length;
        
        for (const [key, val] of Object.entries(userChoices)) {
            if (item.tags && item.tags[key] && item.tags[key].includes(val)) {
                score++;
            }
        }
        
        return {
            ...item,
            score,
            totalCriteria
        };
    });
    
    // Chỉ lấy kết quả có score > 0
    const validResults = results.filter(item => item.score > 0);
    
    // Sort giảm dần
    validResults.sort((a, b) => b.score - a.score);
    
    return validResults;
}

function getTutorial(id) {
    return getAllContent().find(item => item.id === id);
}

function getYouTubeEmbedUrl(videoId) {
    if (!videoId) return "";
    return `https://www.youtube.com/embed/${videoId}`;
}
