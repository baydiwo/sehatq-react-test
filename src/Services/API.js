import axios from 'axios';

export const CONSTANT = {
	BASE_URL: 'https://private-4639ce-ecommerce56.apiary-mock.com',
	API_HOME : '/home',
}

export const axiosInstance = axios.create({
  baseURL: CONSTANT.BASE_URL,
});

export const fetchHomeApi = () => {
	const request = axiosInstance.request({
		url: CONSTANT.API_HOME,
		method: 'GET',
	});
	return request;
}