from selenium import webdriver
import pyautogui
import time
from pynput.mouse import Controller

control = Controller()
time.sleep(5)
pyautogui.click(1120, 530)
time.sleep(3)
pyautogui.click(275, 325)
time.sleep(3)
pyautogui.click(795, 335)
time.sleep(3)
control.scroll(0,-300)
time.sleep(1)
pyautogui.click(175, 675)