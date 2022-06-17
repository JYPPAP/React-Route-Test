import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import { BrowserRouter,Router, Routes, Route } from "react-router-dom";
import App from "./App";

describe('동작 확인', () => {
  test('Should render sigUp view component', () => {
    render(
      <Router>
        <App />
      </Router>
    );
  });
});