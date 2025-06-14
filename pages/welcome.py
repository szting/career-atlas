import streamlit as st

def render():
    st.title(f"Welcome, {st.session_state.user_profile['name'] or 'Explorer'}! 👋")
    
    st.markdown("""
    ### 🎯 Your Career Discovery Journey Begins Here
    
    This comprehensive assessment will help you:
    - **Discover** your personality type through the RIASEC model
    - **Evaluate** your skills and confidence levels
    - **Identify** your core work values
    - **Match** with careers that align with your profile
    - **Receive** personalized coaching and development guidance
    
    ### 📋 Assessment Overview
    
    1. **RIASEC Assessment** (5 minutes)
       - Explore your interests across 6 personality dimensions
    
    2. **Skills Confidence** (3 minutes)
       - Rate your confidence in key professional skills
    
    3. **Work Values** (2 minutes)
       - Identify what matters most to you in your career
    
    4. **Results & Recommendations**
       - Get personalized career matches and coaching insights
    """)
    
    # Name input
    st.divider()
    name = st.text_input("First, what's your name?", value=st.session_state.user_profile['name'])
    
    if name:
        st.session_state.user_profile['name'] = name
        
        col1, col2, col3 = st.columns([1, 2, 1])
        with col2:
            if st.button("🚀 Start Assessment", type="primary", use_container_width=True):
                st.session_state.current_step = 'riasec'
                st.rerun()
    else:
        st.info("Please enter your name to begin the assessment.")
