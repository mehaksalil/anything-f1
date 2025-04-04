export const formatDate = (date) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(date).toLocaleDateString(undefined, options);
  };
  
  export const getTeamColor = (teamName) => {
    const colors = {
      'Red Bull Racing': '#0600EF',
      'Ferrari': '#DC0000',
      'Mercedes': '#00D2BE',
      'McLaren': '#FF8700',
      'Aston Martin': '#006F62',
      'Alpine': '#0090FF',
      'Williams': '#005AFF',
      'AlphaTauri': '#2B4562',
      'Alfa Romeo': '#900000',
      'Haas F1 Team': '#FFFFFF'
    };
    
    return colors[teamName] || '#333333';
  };
  
  export const generateId = () => {
    return Math.random().toString(36).substr(2, 9);
  };