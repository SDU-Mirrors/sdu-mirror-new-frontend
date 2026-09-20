import axios from 'axios';
import helpsListData from '../mock-data/json/helps.json';
import docsListData from '../mock-data/json/docs.json';
import { generateMockMirrorsData, generateMockIsoLinks } from './mockMirrors';

const USE_MOCK_DATA = import.meta.env.VITE_APP_USE_MOCK_DATA === 'true';
const BASE_URL = import.meta.env.VITE_APP_BASE_URL || 'https://mirrors.sdu.edu.cn';

const USE_MOCK_MIRRORS = USE_MOCK_DATA && import.meta.env.VITE_APP_MOCK_MIRRORS === 'true';
const USE_MOCK_HELPS = USE_MOCK_DATA && import.meta.env.VITE_APP_MOCK_HELPS === 'true';
const USE_MOCK_DOCUMENTS = USE_MOCK_DATA && import.meta.env.VITE_APP_MOCK_DOCUMENTS === 'true';

const getTimestamp = () => Math.floor(Date.now() / 60000);

export const getMirrorsListData = async ({ signal } = {}) => {
  if (USE_MOCK_MIRRORS) {
    console.log('[MOCK] 使用镜像列表虚拟数据');
    return generateMockMirrorsData();
  }

  const response = await axios.get(`${BASE_URL}/sync.json`, { signal });
  return response.data;
};

export const getIsoLinksData = async ({ signal } = {}) => {
  if (USE_MOCK_MIRRORS) {
    console.log('[MOCK] 使用ISO下载链接虚拟数据');
    return generateMockIsoLinks();
  }

  const response = await axios.get(`${BASE_URL}/iso-links.json`, { signal });
  return response.data;
};

export const getHelpsListData = async ({ signal } = {}) => {
  if (USE_MOCK_HELPS) {
    console.log('[MOCK] 使用帮助列表数据');
    return helpsListData;
  }

  const response = await axios.get(`${BASE_URL}/json/helps.json`, {
    params: { timestamp: getTimestamp() },
    signal,
  });
  return response.data;
};

export const getDocumentsListData = async ({ signal } = {}) => {
  if (USE_MOCK_DOCUMENTS) {
    console.log('[MOCK] 使用文档列表数据');
    return docsListData;
  }

  const response = await axios.get(`${BASE_URL}/json/docs.json`, {
    params: { timestamp: getTimestamp() },
    signal,
  });
  return response.data;
};

export const getHelpContent = async (url, { signal } = {}) => {
  if (USE_MOCK_HELPS) {
    console.log('[MOCK] 使用帮助内容:', url);
    const response = await axios.get(url, { signal });
    return response.data;
  }

  const fullUrl = `${BASE_URL}${url}`;
  const response = await axios.get(fullUrl, {
    params: { timestamp: getTimestamp() },
    signal,
  });
  return response.data;
};

export const getDocumentContent = async (url, { signal } = {}) => {
  if (USE_MOCK_DOCUMENTS) {
    console.log('[MOCK] 使用文档内容:', url);
    const response = await axios.get(url, { signal });
    return response.data;
  }

  const fullUrl = `${BASE_URL}${url}`;
  const response = await axios.get(fullUrl, {
    params: { timestamp: getTimestamp() },
    signal,
  });
  return response.data;
};

export const mockConfig = {
  enabled: USE_MOCK_DATA,
  mirrors: USE_MOCK_MIRRORS,
  helps: USE_MOCK_HELPS,
  documents: USE_MOCK_DOCUMENTS
};

export const isUsingMockData = (module) => {
  switch (module) {
    case 'mirrors': return USE_MOCK_MIRRORS;
    case 'helps': return USE_MOCK_HELPS;
    case 'documents': return USE_MOCK_DOCUMENTS;
    default: return USE_MOCK_DATA;
  }
};
