import axios from 'axios';

const TraineesApi = {
  createTrainee: async (trainee) => {
    // TODO feedback: 建议把URL定义为常量
    await axios.post('http://localhost:8080/trainees', trainee);
  },

  getTrainees: async () => {
    const response = await axios.get('http://localhost:8080/trainees');
    return response.data;
  },
};

export default TraineesApi;
