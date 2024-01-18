import { createReducer, createAction } from "@reduxjs/toolkit";

const registerRequest = createAction('registerRequest')
const registerSuccess = createAction('registerSuccess')
const registerFailure = createAction('registerFailure')
const clearMsg = createAction('clearMsg')
const clearError = createAction('clearError')

const initialState = { isAuthenticated: false }

export const userReducer = createReducer(initialState, builder => {
    // builder.addCase(loginRequest, state => {
    //     state.loading = true
    // })
    // builder.addCase(loginSuccess, (state, action) => {
    //     state.loading = false
    //     state.user = action.payload
    //     state.isAuthenticated = true
    // })
    // builder.addCase(loginFailure, (state, action) => {
    //     state.loading = false
    //     state.error = action.payload
    //     state.isAuthenticated = false
    // })
    builder.addCase(registerRequest, state => {
        state.loading = true
    })
    builder.addCase(registerSuccess, (state, action) => {
        state.loading = false
        state.user = action.payload
        state.isAuthenticated = true
    })
    builder.addCase(registerFailure, (state, action) => {
        state.loading = false
        state.error = action.payload
        state.isAuthenticated = false
    })
    // builder.addCase(loadUserRequest, state => {
    //     state.loading = true
    // })
    // builder.addCase(loadUserSuccess, (state, action) => {
    //     state.loading = false
    //     state.user = action.payload
    //     state.isAuthenticated = true
    // })
    // builder.addCase(loadUserFailure, (state, action) => {
    //     state.loading = false
    //     state.error = action.payload
    //     state.isAuthenticated = false
    // })
    // builder.addCase(allUsersRequest, state => {
    //     state.loading = true
    // })
    // builder.addCase(allUsersSuccess, (state, action) => {
    //     state.loading = false
    //     state.users = action.payload
    // })
    // builder.addCase(allUsersFailure, (state, action) => {
    //     state.loading = false
    //     state.error = action.payload
    // })
    // builder.addCase(logoutUserRequest, state => {
    //     state.loading = true
    // })
    // builder.addCase(logoutUserSuccess, state => {
    //     state.loading = false
    //     state.user = null
    //     state.isAuthenticated = false
    // })
    // builder.addCase(logoutUserFailure, (state, action) => {
    //     state.loading = false
    //     state.error = action.payload
    //     state.isAuthenticated = true
    // })
    builder.addCase(clearError, state => {
        state.error = null
    })
})