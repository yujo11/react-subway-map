import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import MESSAGE from 'constants/message';

export interface AddSectionPayload {
  id: number;
  upStationId: number;
  downStationId: number;
  distance: number;
}

interface DeleteSectionPayload {
  lineId: number;
  stationId: number;
}

export const addSectionAsync = createAsyncThunk(
  'section/addSectionAsync',
  async ({ id, upStationId, downStationId, distance }: AddSectionPayload) => {
    try {
      const response = await axios.post(`/lines/${id}/sections`, {
        upStationId,
        downStationId,
        distance,
      });

      return response.data;
    } catch (error) {
      throw new Error(error);
    }
  }
);

export const deleteSectionAsync = createAsyncThunk(
  'section/deleteSectionAsync',
  async ({ lineId, stationId }: DeleteSectionPayload) => {
    try {
      await axios.delete(`/lines/${lineId}/sections?stationId=${stationId}`);

      return stationId;
    } catch (error) {
      throw new Error(error);
    }
  }
);

const initialState = {};

const sectionSlice = createSlice({
  name: 'section',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(addSectionAsync.rejected, () => {
      throw Error(MESSAGE.SECTION.ADD_FAIL);
    });
    builder.addCase(deleteSectionAsync.rejected, () => {
      throw Error(MESSAGE.SECTION.DELETE_FAIL);
    });
  },
});

export default sectionSlice.reducer;