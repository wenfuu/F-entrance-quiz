import axios from 'axios';

const TraineesApi = {
  createTrainee: async (trainee) => {
    await axios.post('http://localhost:8080/trainees', trainee);
  },

  getTrainees: async () => {
    const response = await axios.get('http://localhost:8080/trainees');
    return response.data;
  },
};

export default TraineesApi;
